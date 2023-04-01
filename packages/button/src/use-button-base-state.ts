import { useBoolean } from "@md3-ui/hooks"
import { createChainedFunction } from "@md3-ui/utils"
import { ButtonBaseProps } from "./button-base"

export function useButtonBaseState(props: ButtonBaseProps) {
  const [focused, handleFocus] = useBoolean()
  const [hovered, handleHover] = useBoolean()
  const [pressed, handlePress] = useBoolean()

  return {
    focused,
    hovered,
    pressed,
    onBlur: createChainedFunction(props.onBlur, handleFocus.off),
    onFocusVisible: createChainedFunction(props.onFocusVisible, handleFocus.on),
    onHoverIn: createChainedFunction(props.onHoverIn, handleHover.on),
    onHoverOut: createChainedFunction(props.onHoverOut, handleHover.off),
    onPressIn: createChainedFunction(props.onPressIn, handlePress.on),
    onPressOut: createChainedFunction(props.onPressOut, handlePress.off),
  }
}
