import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  StylesProp,
  SxProps,
  useTextStyle,
  useThemeProps,
} from "@md3-ui/system"
import * as React from "react"
import {
  Platform,
  Text as RNText,
  TextStyle as RNTextStyle,
} from "react-native"

export interface TextTypeMap<
  P = {},
  C extends React.ElementType = typeof RNText,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /** @default "inherit" */
    color?:
      | "onBackground"
      | "primary"
      | "onPrimary"
      | "onPrimaryContainer"
      | "onSecondary"
      | "onSecondaryContainer"
      | "onTertiary"
      | "onTertiaryContainer"
      | "onError"
      | "onErrorContainer"
      | "onSurface"
      | "onSurfaceVariant"
      | "inverseOnSurface"
      | "inherit"
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: StylesProp<{
      root?: RNTextStyle
    }>
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
    /** @default "bodyMedium" */
    variant?:
      | "displayLarge"
      | "displayMedium"
      | "displaySmall"
      | "headlineLarge"
      | "headlineMedium"
      | "headlineSmall"
      | "titleLarge"
      | "titleMedium"
      | "titleSmall"
      | "labelLarge"
      | "labelMedium"
      | "labelSmall"
      | "bodyLarge"
      | "bodyMedium"
      | "bodySmall"
      | "inherit"
  }
  defaultAs: C
}

export type TextProps<
  C extends React.ElementType = TextTypeMap["defaultAs"],
  P = {},
> = OverrideProps<TextTypeMap<P, C>, C>

export type TextStyleKey = keyof NonNullable<TextProps["styles"]>

const TextRoot = styled(RNText, {
  name: "Text",
  slot: "Root",
})<OwnerStateProps<Pick<TextProps, "color" | "variant">>>(
  ({ theme, ownerState }) => ({
    textAlign: Platform.OS === "web" ? "start" : "left",

    ...(ownerState.variant != null &&
      ownerState.variant !== "inherit" &&
      theme.sys.typescale[ownerState.variant]),

    ...(Platform.OS === "web" &&
      ownerState.variant === "inherit" && {
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        letterSpacing: "inherit",
        lineHeight: "inherit",
      }),

    ...(ownerState.color != null &&
      ownerState.color !== "inherit" && {
        color: theme.sys.color[ownerState.color],
      }),
  }),
)

export const Text = React.forwardRef<RNText, TextProps>((inProps, ref) => {
  const {
    children,
    color = "inherit",
    style,
    styles,
    variant = "inherit",
    ...props
  } = useThemeProps({ name: "Text", props: inProps })

  const textStyle = useTextStyle()

  const ownerState = {
    color,
    variant,
  }

  return (
    <TextRoot
      ref={ref}
      style={[textStyle, style, styles?.root]}
      ownerState={ownerState}
      {...props}
    >
      {children}
    </TextRoot>
  )
}) as OverridableComponent<TextTypeMap>

Text.displayName = "Text"
