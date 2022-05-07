import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  SxProps,
  useTextStyle,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { Platform, ViewStyle as RNViewStyle } from "react-native"
import Svg from "react-native-svg"

export interface IconTypeMap<P = {}, C extends React.ElementType = typeof Svg> {
  props: P & {
    /**
     * The node passed into the SVG element.
     */
    children?: React.ReactNode
    /**
     * The color of the component. You can use the `htmlColor` prop to apply a
     * color attribute to the SVG element.
     * @default "currentColor"
     */
    color?: string
    /** @default "medium" */
    size?: "inherit" | "small" | "medium" | "large"
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: {
      root?: RNViewStyle
    }
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type IconProps<
  C extends React.ElementType = IconTypeMap["defaultAs"],
  P = {},
> = OverrideProps<IconTypeMap<P, C>, C>

export type IconStyleKey = keyof NonNullable<IconProps["styles"]>

const IconRoot = styled(Svg, {
  name: "Icon",
  slot: "Root",
})<OwnerStateProps<Pick<IconProps, "height" | "size" | "width">>>(
  ({ ownerState }) => ({
    flexShrink: 0,

    ...(ownerState.size === "small" && {
      height: 12,
      width: 12,
    }),

    ...(ownerState.size === "medium" && {
      height: 18,
      width: 18,
    }),

    ...(ownerState.size === "large" && {
      height: 24,
      width: 24,
    }),

    ...((ownerState.height != null || ownerState.width != null) && {
      height: ownerState.height,
      width: ownerState.width,
    }),
  }),
)

export const Icon = React.forwardRef<any, IconProps>((inProps, ref) => {
  const {
    children,
    color = Platform.OS === "web" ? "currentColor" : undefined,
    height,
    size = "medium",
    style,
    styles,
    width,
    ...props
  } = useThemeProps({
    name: "Icon",
    props: inProps,
  })

  const textStyle = useTextStyle()

  const ownerState = {
    height: height ?? textStyle.fontSize,
    size,
    width: width ?? textStyle.fontSize,
  }

  return (
    <IconRoot
      ref={ref}
      color={color}
      fill={color}
      ownerState={ownerState}
      style={[textStyle, style, styles?.root]}
      {...props}
    >
      {children}
    </IconRoot>
  )
}) as OverridableComponent<IconTypeMap>

if (__DEV__) {
  Icon.displayName = "Icon"
}
