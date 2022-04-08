import { useAnimate, useBoolean, useForkRef } from "@md3-ui/hooks"
import {
  OwnerStateProps,
  styled,
  SxProps,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { createChainedFunction, __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Easing,
  Text as RNText,
  TextInput as RNTextInput,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { TextInput, TextInputProps } from "./text-input"
import { TextInputLabel } from "./text-input-label"

export interface TextFieldProps extends TextInputProps {
  /**
   * The helper text content.
   */
  helperText?: string
  /**
   * The label content.
   */
  label?: string
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    container?: RNViewStyle
    label?: RNTextStyle
    outline?: RNViewStyle
    root?: RNTextStyle
  }
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
  /**
   * The variant to use.
   * @default "outlined"
   */
  variant?: "filled" | "outlined"
}

export type TextFieldStyleKey = keyof NonNullable<TextFieldProps["styles"]>

const TextFieldRoot = styled(TextInput, {
  name: "TextField",
  slot: "Root",
})<OwnerStateProps<Pick<TextFieldProps, "endIcon" | "startIcon">>>(
  ({ theme, ownerState }) => ({
    ...theme.typescale["body-large"],
    color: theme.color["on-surface"],
    padding: theme.spacing(2),
    minHeight: 56,

    "&:-webkit-autofill": {
      borderRadius: 4,
    },

    ...(ownerState.startIcon && {
      paddingStart: 0,
    }),

    ...(ownerState.endIcon && {
      paddingEnd: 0,
    }),
  }),
)

const TextFieldContainer = styled(RNView, {
  name: "TextField",
  slot: "Container",
  skipSx: true,
})<
  OwnerStateProps<Pick<TextFieldProps, "endIcon" | "fullWidth" | "startIcon">>
>(({ theme, ownerState }) => ({
  ...(ownerState.fullWidth && {
    width: "100%",
  }),

  ...(ownerState.startIcon && {
    paddingStart: theme.spacing(2.5),
  }),

  ...(ownerState.endIcon && {
    paddingEnd: theme.spacing(2.5),
  }),
}))

const TextFieldOutline = styled(RNView, {
  name: "TextField",
  slot: "Outline",
  skipSx: true,
})<OwnerStateProps<Pick<TextFieldProps, "error"> & { focused: boolean }>>(
  ({ theme, ownerState }) => ({
    borderColor: theme.color.outline,
    borderRadius: 4,
    borderWidth: 1,
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,

    "&:hover": {
      borderColor: theme.color["on-surface"],
    },

    ...(ownerState.focused && {
      borderColor: theme.color.primary,
      borderWidth: 2,
    }),

    ...(ownerState.error && {
      borderColor: theme.color.error,
    }),
  }),
)

const TextFieldLabel = styled(TextInputLabel, {
  name: "TextField",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.typescale["body-large"],
  backgroundColor: theme.color.surface,
  color: theme.color["on-surface"],
  left: 0,
  paddingHorizontal: theme.spacing(0.5) / 0.75,
  position: "absolute",
  top: 0,
  zIndex: 2,
}))

const TextFieldHelperText = styled(RNText, {
  name: "TextField",
  slot: "HelperText",
  skipSx: true,
})(({ theme }) => ({
  ...theme.typescale["body-large"],
  color: theme.color["on-surface"],
}))

export const TextField = React.forwardRef<RNTextInput, TextFieldProps>(
  (inProps, ref) => {
    const {
      children,
      endIcon,
      error = false,
      fullWidth = false,
      helperText,
      label,
      nativeID,
      onBlur,
      onEmpty,
      onFilled,
      onFocus,
      startIcon,
      style,
      styles,
      variant = "outlined",
      ...props
    } = useThemeProps({
      name: "TextField",
      props: inProps,
    })

    const theme = useTheme()

    const rootRef = React.useRef<RNTextInput>(null)
    const handleRef = useForkRef(rootRef, ref)

    const [filled, handleFilled] = useBoolean()
    const [focused, handleFocus] = useBoolean()

    const shrink = filled || focused

    const [transform] = useAnimate({
      duration: 200,
      easing: Easing.bezier(0, 0, 0.2, 1),
      shouldReset: false,
      toValue: shrink ? 1 : 0,
    })

    const ownerState = {
      endIcon,
      error,
      filled,
      focused,
      fullWidth,
      startIcon,
      variant,
    }

    const helperTextID =
      helperText != null && nativeID != null
        ? `${nativeID}-helper-text`
        : undefined
    const labelID =
      label != null && nativeID != null ? `${nativeID}-label` : undefined

    return (
      <TextFieldContainer ownerState={ownerState} style={styles?.container}>
        {label != null && label !== "" && (
          <TextFieldLabel
            htmlFor={nativeID}
            nativeID={labelID}
            shrink={shrink}
            style={[
              {
                color: error
                  ? theme.color.error
                  : transform.interpolate({
                      inputRange: [0, 1],
                      outputRange: [
                        theme.color["on-surface"],
                        theme.color.primary,
                      ],
                    }),
                transform: [
                  {
                    scale: transform.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.75],
                    }),
                  },
                  {
                    translateX: transform.interpolate({
                      inputRange: [0, 1],
                      outputRange: [
                        theme.spacing(2) - theme.spacing(0.5) / 0.75,
                        theme.spacing(2) - theme.spacing(0.5),
                      ],
                    }),
                  },
                  {
                    translateY: transform.interpolate({
                      inputRange: [0, 1],
                      outputRange: [theme.spacing(2), -12 - 2],
                    }),
                  },
                ],
              },
              styles?.label,
            ]}
          >
            {label}
          </TextFieldLabel>
        )}
        <TextFieldOutline
          ownerState={ownerState}
          pointerEvents="none"
          style={styles?.outline}
        />
        <TextFieldRoot
          ref={handleRef}
          accessibilityDescribedBy={helperTextID}
          endIcon={endIcon}
          error={error}
          fullWidth={fullWidth}
          nativeID={nativeID}
          ownerState={ownerState}
          placeholderTextColor={theme.color["on-surface-variant"]}
          startIcon={startIcon}
          style={[style, styles?.root]}
          onBlur={createChainedFunction(onBlur, handleFocus.off)}
          onEmpty={createChainedFunction(onFilled, handleFilled.off)}
          onFilled={createChainedFunction(onFilled, handleFilled.on)}
          onFocus={createChainedFunction(onFocus, handleFocus.on)}
          {...props}
        />
        {helperText && (
          <TextFieldHelperText nativeID={helperTextID}>
            {helperText}
          </TextFieldHelperText>
        )}
      </TextFieldContainer>
    )
  },
)

if (__DEV__) {
  TextField.displayName = "TextField"
}
