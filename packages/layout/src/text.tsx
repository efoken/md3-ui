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
    styles?: {
      root?: RNTextStyle
    }
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
    /** @default "body-medium" */
    variant?:
      | "display-large"
      | "display-medium"
      | "display-small"
      | "headline-large"
      | "headline-medium"
      | "headline-small"
      | "title-large"
      | "title-medium"
      | "title-small"
      | "label-large"
      | "label-medium"
      | "label-small"
      | "body-large"
      | "body-medium"
      | "body-small"
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

    ...(ownerState.variant != null && theme.sys.typescale[ownerState.variant]),

    ...(Platform.OS === "web" &&
      ownerState.variant === "inherit" && {
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        letterSpacing: "inherit",
        lineHeight: "inherit",
      }),

    ...(ownerState.color != null && {
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

if (__DEV__) {
  Text.displayName = "Text"
}
