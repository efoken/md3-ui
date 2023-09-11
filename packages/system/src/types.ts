import { DistributiveOmit, PropsOf } from "@emotion/react"
import { Theme } from "@md3-ui/theme"
import { Media, Pseudo } from "@md3-ui/utils"
import {
  CSSProperties,
  ComponentClass,
  ComponentProps,
  ComponentPropsWithRef,
  ElementType,
  FunctionComponent,
  JSXElementConstructor,
  Ref,
} from "react"
import {
  ImageStyle as RNImageStyle,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
  StyleProp,
} from "react-native"
import {
  BackgroundProps,
  BorderProps,
  DisplayProps,
  ElevationProps,
  FlexboxProps,
  InteractivityProps,
  PositionProops,
  SizingProps,
  SpacingProps,
  TransformProps,
  TransitionProps,
  TypographyProps,
} from "./system/types"

export type RNStyle = RNViewStyle | RNTextStyle | Omit<RNImageStyle, "overflow">

export type RNStyleWithMediaAndPseudo = RNStyle & {
  [K in Media | Pseudo]?: RNStyle
}

export type NamedStyles<T> = {
  [P in keyof T]: RNStyle
}

export type ResponsiveValue<T> =
  | T
  | (T | null)[]
  | Partial<Record<keyof Theme["breakpoints"]["values"], T | null>>

export type AllSystemProps = BackgroundProps &
  BorderProps &
  DisplayProps &
  ElevationProps &
  FlexboxProps &
  InteractivityProps &
  PositionProops &
  SizingProps &
  SpacingProps &
  TransformProps &
  TransitionProps &
  TypographyProps

export type SystemProps = {
  [K in keyof AllSystemProps]:
    | ResponsiveValue<AllSystemProps[K]>
    | ((theme: Theme) => ResponsiveValue<AllSystemProps[K]>)
    | SystemStyleObject
}

export type SystemStyleObject = SystemProps | null

export type SxProps =
  | SystemStyleObject
  | ((theme: Theme) => SystemStyleObject)
  | readonly (
      | boolean
      | SystemStyleObject
      | ((theme: Theme) => SystemStyleObject)
    )[]

export type StylesProp<T> = {
  [K in keyof T]?: NonNullable<T[K]> extends CSSProperties
    ? T[K]
    : StyleProp<NonNullable<T[K]>>
}

export interface OwnerStateProps<T> {
  ownerState: T
}

type InterpolationPrimitive<S extends RNStyle = RNStyle> =
  | null
  | undefined
  | boolean
  | number
  | string
  | S

type Interpolation<
  P = unknown,
  S extends RNStyle = RNStyleWithMediaAndPseudo,
> =
  | InterpolationPrimitive<S>
  | Interpolation<P, S>[]
  | ((props: P) => Interpolation<P, S>)

type CSSInterpolation<S extends RNStyle = RNStyle> =
  | InterpolationPrimitive<S>
  | CSSInterpolation<S>[]

export interface StyledComponent<
  InnerProps,
  OwnerState extends { style?: any },
  P,
> extends FunctionComponent<
    InnerProps &
      Omit<OwnerState, "style"> &
      P & {
        style?: StyleProp<OwnerState["style"]>
        theme?: Theme
      }
  > {}

export interface CreateStyledComponent<
  ComponentProps extends {},
  SpecificComponentProps extends {} = {},
  JSXProps extends {} = {},
> {
  <AdditionalProps extends {} = {}>(
    ...styles: Interpolation<
      ComponentProps &
        AdditionalProps &
        SpecificComponentProps & { theme: Theme }
    >[]
  ): StyledComponent<
    ComponentProps & AdditionalProps,
    SpecificComponentProps,
    JSXProps
  >
}

export interface CommonStyledOptions {
  name?: string
  slot?: string
  overridesResolver?: (
    props: any,
    styles: Record<string, CSSInterpolation>,
  ) => CSSInterpolation
  skipVariantsResolver?: boolean
  skipSx?: boolean
}

export interface StyledOptions extends CommonStyledOptions {
  label?: string
  shouldForwardProp?: (propName: keyof any) => boolean
  target?: string
}

/**
 * Same as `StyledOptions` but `shouldForwardProp` must be a type guard.
 */
export interface FilteringStyledOptions<
  Props,
  ForwardedProps extends keyof Props = keyof Props,
> extends CommonStyledOptions {
  label?: string
  shouldForwardProp?: (propName: keyof any) => propName is ForwardedProps
  target?: string
}

export interface CreateStyled {
  <
    C extends ComponentClass<ComponentProps<C>>,
    ForwardedProps extends keyof ComponentProps<C> = keyof ComponentProps<C>,
  >(
    component: C,
    options: FilteringStyledOptions<ComponentProps<C>, ForwardedProps>,
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme
      as?: ElementType
      sx?: SxProps
    },
    {},
    {
      ref?: Ref<InstanceType<C>>
    }
  >

  <C extends ComponentClass<ComponentProps<C>>>(
    component: C,
    options?: StyledOptions,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme
      as?: ElementType
      sx?: SxProps
    },
    {},
    {
      ref?: Ref<InstanceType<C>>
    }
  >

  <
    C extends JSXElementConstructor<ComponentProps<C>>,
    ForwardedProps extends keyof ComponentProps<C> = keyof ComponentProps<C>,
  >(
    component: C,
    options: FilteringStyledOptions<ComponentProps<C>, ForwardedProps>,
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme
      as?: ElementType
      sx?: SxProps
    }
  >

  <C extends JSXElementConstructor<ComponentProps<C>>>(
    component: C,
    options?: StyledOptions,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme
      as?: ElementType
      sx?: SxProps
    }
  >

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends
      keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag],
  >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>,
  ): CreateStyledComponent<
    {
      theme?: Theme
      as?: ElementType
      sx?: SxProps
    },
    Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
  >

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions,
  ): CreateStyledComponent<
    {
      theme?: Theme
      as?: ElementType
      sx?: SxProps
    },
    JSX.IntrinsicElements[Tag]
  >
}

export interface CreateCSS {
  (...args: CSSInterpolation[]): Record<string, any>
}

export interface OverridableTypeMap {
  props: {}
  defaultAs: ElementType
}

/**
 * Props defined on the component.
 */
export type BaseProps<M extends OverridableTypeMap> = M["props"]

/**
 * Props of the component if `as={Component}` is used.
 */
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends ElementType,
> = BaseProps<M> &
  DistributiveOmit<ComponentPropsWithRef<C>, keyof BaseProps<M>>

/**
 * Props if `as={Component}` is NOT used.
 */
export type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<ComponentPropsWithRef<M["defaultAs"]>, keyof BaseProps<M>>

export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      as: C
    } & OverrideProps<M, C>,
  ): JSX.Element
  (props: DefaultComponentProps<M>): JSX.Element
  displayName?: string
  propTypes?: any
}
