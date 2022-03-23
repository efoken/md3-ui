import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  StyleSheet,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { objectFilter, __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Platform,
  StyleProp,
  Text as RNText,
  TextStyle as RNTextStyle,
} from "react-native"

interface TextContextType {
  style: RNTextStyle
}

const TextContext = React.createContext<TextContextType>(undefined as any)

export interface TextProviderProps {
  style?: StyleProp<RNTextStyle>
}

export const TextProvider: React.FC<TextProviderProps> = ({
  children,
  style: styleProp = {},
}) => {
  const style = StyleSheet.flatten(styleProp)

  const context = React.useMemo(() => ({ style }), [style])

  return (
    <TextContext.Provider value={context}>
      {Platform.OS === "web" ? (
        <div
          style={{
            ...objectFilter(
              style,
              (v, k) => k === "color" || k === "fontFamily",
            ),
            display: "contents",
          }}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </TextContext.Provider>
  )
}

export function useTextContext() {
  return React.useContext(TextContext) ?? {}
}

export interface TextTypeMap<
  P = {},
  C extends React.ElementType = typeof RNText,
> {
  props: P & {
    children?: React.ReactNode
    color?:
      | "on-background"
      | "on-primary"
      | "on-primary-container"
      | "on-secondary"
      | "on-secondary-container"
      | "on-tertiary"
      | "on-tertiary-container"
      | "on-error"
      | "on-error-container"
      | "on-surface"
      | "on-surface-variant"
      | "inverse-on-surface"
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
    textAlign: "left",

    ...(ownerState.variant != null && theme.typescale[ownerState.variant]),

    ...(Platform.OS === "web" &&
      ownerState.variant === "inherit" && {
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        letterSpacing: "inherit",
        lineHeight: "inherit",
      }),

    ...(ownerState.color != null && {
      color: theme.color[ownerState.color],
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

  const { style: parentStyle } = useTextContext()

  const ownerState = {
    color,
    variant,
  }

  return (
    <TextRoot
      ref={ref}
      style={[parentStyle, style, styles?.root]}
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
