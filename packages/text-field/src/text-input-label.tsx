import { useForkRef } from "@md3-ui/hooks"
import { OwnerStateProps, styled, SxProps, useThemeProps } from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Animated,
  Platform,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle as RNTextStyle,
  View as RNView,
} from "react-native"

export interface TextInputLabelProps
  extends Animated.AnimatedProps<RNTextProps> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  htmlFor?: string
  /**
   * If `true`, the label is shrunk.
   * @default false
   */
  shrink?: boolean
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
}

export type TextInputLabelStyleKey = keyof NonNullable<
  TextInputLabelProps["styles"]
>

const TextInputLabelRoot = styled(Animated.Text, {
  name: "TextInputLabel",
  slot: "Root",
})({
  maxWidth: "100%",
})

const TextInputLabelContainer = styled(RNView, {
  name: "TextInputLabel",
  slot: "Container",
  skipSx: true,
})<OwnerStateProps<Pick<TextInputLabelProps, "shrink">>>(({ ownerState }) => ({
  bottom: 0,
  left: 0,
  pointerEvents: ownerState.shrink ? "auto" : "none",
  position: "absolute",
  right: 0,
  top: 0,
}))

export const TextInputLabel = React.forwardRef<RNText, TextInputLabelProps>(
  (inProps, ref) => {
    const {
      htmlFor,
      shrink = false,
      style,
      styles,
      ...props
    } = useThemeProps({
      name: "TextInputLabel",
      props: inProps,
    })

    const rootRef = React.useRef<RNText>(null)
    const handleRef = useForkRef(rootRef, ref)

    React.useEffect(() => {
      if (Platform.OS === "web" && htmlFor != null) {
        rootRef.current?.setNativeProps({ for: htmlFor })
      }
    }, [htmlFor])

    const ownerState = {
      shrink,
    }

    const children = (
      <TextInputLabelRoot
        ref={handleRef}
        numberOfLines={1}
        role={Platform.OS === "web" ? ("label" as any) : "presentation"}
        style={[style, styles?.root]}
        {...props}
      />
    )

    return Platform.OS === "web" ? (
      children
    ) : (
      <TextInputLabelContainer ownerState={ownerState}>
        {children}
      </TextInputLabelContainer>
    )
  },
)

if (__DEV__) {
  TextInputLabel.displayName = "TextInputLabel"
}
