import { PropsOf } from "@emotion/react"
import { Theme } from "@md3-ui/theme"
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
  FlexboxProps,
  PositionProops,
  SizingProps,
  SpacingProps,
  TypescaleProps,
} from "./system/types"

export type AllStyle = RNViewStyle | RNTextStyle | RNImageStyle

type Media = `@media (${"min-width" | "max-width"}: ${number | ""}${
  | number
  | ""}${number}${"px" | "em" | "rem"})`

type Pseudo = ":active" | ":focus" | ":hover"

export type AllStyleWithMediaAndPseudo = AllStyle &
  {
    [key in Media | Pseudo]?: AllStyle
  }

export type NamedStyles<T> = {
  [P in keyof T]: AllStyle
}

export type ResponsiveValue<T> = T | (T | null)[] | { [key: string]: T | null }

export type AllSystemProps = BackgroundProps &
  BorderProps &
  DisplayProps &
  FlexboxProps &
  PositionProops &
  SizingProps &
  SpacingProps &
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
