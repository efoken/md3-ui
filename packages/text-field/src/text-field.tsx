import { useAnimate, useBoolean, useForkRef } from "@md3-ui/hooks"
import {
  OwnerStateProps,
  StylesProp,
  SxProps,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__, createChainedFunction } from "@md3-ui/utils"
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
  styles?: StylesProp<{
    container?: RNViewStyle
    label?: RNTextStyle
    outline?: RNViewStyle
    root?: RNTextStyle
  }>
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
    // ...theme.sys.typescale.bodyLarge,
    color: theme.sys.color.onSurface,
    padding: 16,
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
>(({ ownerState }) => ({
  ...(ownerState.fullWidth && {
    width: "100%",
  }),

  ...(ownerState.startIcon && {
    paddingStart: 20,
  }),

  ...(ownerState.endIcon && {
    paddingEnd: 20,
  }),
}))

const TextFieldOutline = styled(RNView, {
  name: "TextField",
  slot: "Outline",
  skipSx: true,
})<OwnerStateProps<Pick<TextFieldProps, "error"> & { focused: boolean }>>(
  ({ theme, ownerState }) => ({
    borderColor: theme.sys.color.outline,
    borderRadius: 4,
    borderWidth: 1,
    bottom: 0,
    left: 0,
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,

    "&:hover": {
      borderColor: theme.sys.color.onSurface,
    },

    ...(ownerState.focused && {
      borderColor: theme.sys.color.primary,
      borderWidth: 2,
    }),

    ...(ownerState.error && {
      borderColor: theme.sys.color.error,
    }),
  }),
)

const TextFieldLabel = styled(TextInputLabel, {
  name: "TextField",
  slot: "Label",
  skipSx: true,
})(({ theme }) => ({
  ...theme.sys.typescale.bodyLarge,
  backgroundColor: theme.sys.color.surface,
  color: theme.sys.color.onSurface,
  paddingHorizontal: 4 / 0.75,
  position: "absolute",
  start: 0,
  top: 0,
  zIndex: 2,
}))

const TextFieldHelperText = styled(RNText, {
  name: "TextField",
  slot: "HelperText",
  skipSx: true,
})(({ theme }) => ({
  ...theme.sys.typescale.bodyLarge,
  color: theme.sys.color.onSurface,
}))

export const TextField = React.forwardRef<RNTextInput, TextFieldProps>(
  (inProps, ref) => {
    const {
      children,
      endIcon,
      error = false,
      fullWidth = false,
      helperText,
      id,
      label,
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

    const helperTextId =
      helperText != null && id != null ? `${id}-helper-text` : undefined
    const labelId = label != null && id != null ? `${id}-label` : undefined

    return (
      <TextFieldContainer ownerState={ownerState} style={styles?.container}>
        {label != null && label !== "" && (
          <TextFieldLabel
            htmlFor={id}
            id={labelId}
            shrink={shrink}
            style={[
              {
                color: error
                  ? theme.sys.color.error
                  : transform.interpolate({
                      inputRange: [0, 1],
                      outputRange: [
                        theme.sys.color.onSurface,
                        theme.sys.color.primary,
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
                      outputRange: [16 - 4 / 0.75, 16 - 4],
                    }),
                  },
                  {
                    translateY: transform.interpolate({
                      inputRange: [0, 1],
                      outputRange: [16, -12 - 2],
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
        <TextFieldOutline ownerState={ownerState} style={styles?.outline} />
        <TextFieldRoot
          ref={handleRef}
          aria-describedby={helperTextId}
          endIcon={endIcon}
          error={error}
          fullWidth={fullWidth}
          id={id}
          ownerState={ownerState}
          placeholderTextColor={theme.sys.color.onSurfaceVariant}
          startIcon={startIcon}
          style={[style, styles?.root]}
          onBlur={createChainedFunction(onBlur, handleFocus.off)}
          onEmpty={createChainedFunction(onFilled, handleFilled.off)}
          onFilled={createChainedFunction(onFilled, handleFilled.on)}
          onFocus={createChainedFunction(onFocus, handleFocus.on)}
          {...props}
        />
        {helperText && (
          <TextFieldHelperText id={helperTextId}>
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
