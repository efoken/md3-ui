import * as React from "react"
import {
  PressableProps as RNPressableProps,
  View as RNView,
} from "react-native"
import { createPressable } from "../create-pressable"
import { SxProps } from "../types"

export interface PressableProps extends RNPressableProps {
  /**
   * The surface tint color.
   */
  surfaceTintColor?: string
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export const Pressable = createPressable({
  name: "Pressable",
}) as React.ForwardRefExoticComponent<
  PressableProps & React.RefAttributes<RNView>
>

Pressable.displayName = "Pressable"
