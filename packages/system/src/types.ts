import { DistributiveOmit, PropsOf } from "@emotion/react"
import { Theme } from "@md3-ui/theme"
import { Media, Pseudo } from "@md3-ui/utils"
import * as React from "react"
import {
  ImageStyle as RNImageStyle,
  TextStyle as RNTextStyle,
  ViewStyle as RNViewStyle,
} from "react-native"
import {
  BackgroundProps,
  BorderProps,
  DisplayProps,
  ElevationProps,
  FlexboxProps,
  PositionProops,
  SizingProps,
  SpacingProps,
  TransformProps,
  TypescaleProps,
} from "./system/types"

export type AllStyle = RNViewStyle | RNTextStyle | RNImageStyle

export type AllStyleWithMediaAndPseudo = AllStyle & {
  [K in Media | Pseudo]?: AllStyle
}

export type NamedStyles<T> = {
  [P in keyof T]: AllStyle
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
  PositionProops &
  SizingProps &
  SpacingProps &
  TransformProps &
  TypescaleProps

export type SystemProps = {
  [K in keyof AllSystemProps]:
    | ResponsiveValue<AllSystemProps[K]>
    | ((theme: Theme) => ResponsiveValue<AllSystemProps[K]>)
    | SystemStyleObject
}

export type SystemStyleObject = SystemProps | Record<string, SystemProps> | null

export type SxProps = SystemStyleObject

export interface OwnerStateProps<T> {
  ownerState: T
}

type InterpolationPrimitive = null | undefined | boolean | number | string

type Interpolation<
  P = unknown,
  S extends AllStyle = AllStyleWithMediaAndPseudo,
> =
  | InterpolationPrimitive
  | S
  | Interpolation<P, S>[]
  | ((props: P) => Interpolation<P, S>)

type CSSInterpolation<S extends AllStyle = AllStyle> =
  | InterpolationPrimitive
  | S
  | CSSInterpolation<S>[]

export interface StyledComponent<InnerProps, OwnerState, P>
  extends React.FunctionComponent<
    InnerProps & OwnerState & P & { theme?: Theme }
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
    C extends React.ComponentClass<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>,
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>,
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme
      as?: React.ElementType
      sx?: SxProps
    },
    {},
    {
      ref?: React.Ref<InstanceType<C>>
    }
  >

  <C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme
      as?: React.ElementType
      sx?: SxProps
    },
    {},
    {
      ref?: React.Ref<InstanceType<C>>
    }
  >

  <
    C extends React.JSXElementConstructor<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>,
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>,
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme
      as?: React.ElementType
      sx?: SxProps
    }
  >

  <C extends React.JSXElementConstructor<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme
      as?: React.ElementType
      sx?: SxProps
    }
  >

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag],
  >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>,
  ): CreateStyledComponent<
    {
      theme?: Theme
      as?: React.ElementType
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
      as?: React.ElementType
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
  defaultAs: React.ElementType
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
  C extends React.ElementType,
> = BaseProps<M> &
  DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>

/**
 * Props if `as={Component}` is NOT used.
 */
export type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<
    React.ComponentPropsWithRef<M["defaultAs"]>,
    keyof BaseProps<M>
  >

export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends React.ElementType>(
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
