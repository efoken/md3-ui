import { useControlled, useEnhancedEffect, useForkRef } from "@md3-ui/hooks"
import {
  Global,
  OwnerStateProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Platform,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { isFilled } from "./utils"

export interface TextInputProps extends RNTextInputProps {
  /**
   * End `TextInputIcon` for this component.
   */
  endIcon?: React.ReactElement
  /**
   * If `true`, the input will indicate an error.
   * @default false
   */
  error?: boolean
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean
  /**
   * Name attribute of the `input` element.
   */
  name?: string
  onEmpty?: () => void
  onFilled?: () => void
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string
  /**
   * Start `TextInputIcon` for this component.
   */
  startIcon?: React.ReactElement
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    container?: RNViewStyle
    root?: RNTextStyle
  }
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export type TextInputStyleKey = keyof NonNullable<TextInputProps["styles"]>

const TextInputRoot = styled(RNTextInput, {
  name: "TextInput",
  slot: "Root",
})({
  display: "flex",
  minWidth: 0,
  width: "100%",

  "&::placeholder": {
    transition: "opacity 200ms cubic-bezier(0, 0, 0.2, 1)",
  },

  "&:focus-visible": {
    outlineStyle: "none",
  },

  "&:enabled": {
    animationDuration: "10ms",
    animationName: "md3-auto-fill-cancel",
  },

  "&:-webkit-autofill": {
    animationDuration: "5000s",
    animationName: "md3-auto-fill",
  },
})

const TextInputContainer = styled(RNView, {
  name: "TextInput",
  slot: "Container",
  skipSx: true,
})<OwnerStateProps<Pick<TextInputProps, "fullWidth">>>(({ ownerState }) => ({
  alignItems: "center",
  flexDirection: "row",

  ...(ownerState.fullWidth && {
    width: "100%",
  }),
}))

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (inProps, ref) => {
    const {
      defaultValue,
      endIcon,
      error = false,
      fullWidth = false,
      multiline = false,
      name,
      onChangeText,
      onEmpty,
      onFilled,
      startIcon,
      style,
      styles,
      value: valueProp,
      ...props
    } = useThemeProps({
      name: "TextInput",
      props: inProps,
    })

    const rootRef = React.useRef<RNTextInput>(null)
    const handleRef = useForkRef(rootRef, ref)

    const { current: controlled } = React.useRef(valueProp != null)
    const [value, setValue] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: "TextInput",
    })

    React.useEffect(() => {
      if (Platform.OS === "web" && name != null) {
        rootRef.current?.setNativeProps({ name })
      }
    }, [name])

    const checkDirty = React.useCallback(
      (checkProps: Pick<TextInputProps, "defaultValue" | "value">) => {
        if (isFilled(checkProps)) {
          onFilled?.()
        } else {
          onEmpty?.()
        }
      },
      [onFilled, onEmpty],
    )

    useEnhancedEffect(() => {
      if (controlled) {
        checkDirty({ value })
      }
    }, [checkDirty, controlled, value])

    const handleChangeText = (text: string) => {
      if (!controlled) {
        checkDirty({ value: text })
      }
      onChangeText?.(text)
      setValue(text)
    }

    // Check the input state on mount, in case it was filled by the user or auto
    // filled by the browser before the hydration (for SSR).
    React.useEffect(() => {
      checkDirty({ defaultValue, value })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleAutoFill = (event: React.AnimationEvent) => {
      checkDirty(
        event.animationName === "md3-auto-fill-cancel"
          ? { defaultValue, value }
          : // Provide a fake value as Chrome might not let you access it for
            // security reasons.
            { value: "x" },
      )
    }

    const ownerState = {
      fullWidth,
    }

    return (
      <>
        <Global
          styles={{
            "@keyframes md3-auto-fill": { from: { display: "flex" } },
            "@keyframes md3-auto-fill-cancel": { from: { display: "flex" } },
          }}
        />
        <TextInputContainer ownerState={ownerState} style={styles?.container}>
          {startIcon}
          <TextInputRoot
            ref={handleRef}
            aria-invalid={error}
            multiline={multiline}
            style={[style, styles?.root]}
            value={value}
            onAnimationStart={handleAutoFill}
            onChangeText={handleChangeText}
            {...props}
          />
          {endIcon}
        </TextInputContainer>
      </>
    )
  },
)

if (__DEV__) {
  TextInput.displayName = "TextInput"
}
