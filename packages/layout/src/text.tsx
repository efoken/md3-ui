import {
  OwnerStateProps,
  styled,
  StyleSheet,
  useThemeProps,
} from "@md3-ui/styles"
import { objectFilter } from "@md3-ui/utils"
import * as React from "react"
import {
  Platform,
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
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

export interface TextProps extends RNTextProps {
  styles?: {
    root?: RNTextStyle
  }
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
}

const TextRoot = styled(RNText, {
  name: "Text",
  slot: "Root",
})<OwnerStateProps<Pick<TextProps, "variant">>>(({ theme, ownerState }) => ({
  ...(ownerState.variant != null && theme.typescale[ownerState.variant]),
}))

export const Text = React.forwardRef<RNText, TextProps>((inProps, ref) => {
  const {
    children,
    style,
    styles,
    variant = "body-medium",
    ...props
  } = useThemeProps({ name: "Text", props: inProps })

  const { style: parentStyle } = useTextContext()

  const ownerState = {
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
})
