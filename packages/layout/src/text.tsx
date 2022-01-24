import { StyleSheet, useThemeProps } from "@md3-ui/styles"
import { objectFilter } from "@md3-ui/utils"
import * as React from "react"
import {
  Platform,
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native"

type TextContextType = {
  style: TextStyle
}

const TextContext = React.createContext<TextContextType>(undefined as any)

export interface TextProviderProps {
  style?: StyleProp<TextStyle>
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
              (v, k) => k === "color" || k === "fontFamily"
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

export interface TextProps extends RNTextProps {
  styles?: {
    root: TextStyle
  }
}

export const Text = React.forwardRef<RNText, TextProps>((inProps, ref) => {
  const { children, style, styles, ...props } = useThemeProps({
    name: "Text",
    props: inProps,
  })

  const { style: parentStyle } = React.useContext(TextContext)

  return (
    <RNText ref={ref} style={[parentStyle, style, styles?.root]} {...props}>
      {children}
    </RNText>
  )
})
