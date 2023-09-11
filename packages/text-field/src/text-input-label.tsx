import { useForkRef } from "@md3-ui/hooks"
import {
  OwnerStateProps,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { forwardRef, useEffect, useRef } from "react"
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
  styles?: StylesProp<{
    root?: RNTextStyle
  }>
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

export const TextInputLabel = forwardRef<RNText, TextInputLabelProps>(
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

    const rootRef = useRef<RNText>(null)
    const handleRef = useForkRef(rootRef, ref)

    useEffect(() => {
      if (Platform.OS === "web" && rootRef.current != null && htmlFor != null) {
        ;(rootRef.current as unknown as HTMLLabelElement).htmlFor = htmlFor
      }
    }, [htmlFor])

    const ownerState = {
      shrink,
    }

    const children = (
      <TextInputLabelRoot
        ref={handleRef}
        accessibilityRole={Platform.OS === "web" ? ("label" as any) : undefined}
        numberOfLines={1}
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

TextInputLabel.displayName = "TextInputLabel"
