import * as React from "react"

declare module "react-native" {
  export interface PressableStateCallbackType {
    readonly focused: boolean
    readonly hovered: boolean
  }

  export interface PressableProps {
    /** @platform web */
    onHoverIn?: (event: MouseEvent) => void
    /** @platform web */
    onHoverOut?: (event: MouseEvent) => void
  }

  export interface TextStyle {}

  export interface ViewStyle {
    /** @platform web */
    boxShadow?: React.CSSProperties["boxShadow"]
    /** @platform web */
    cursor?: React.CSSProperties["cursor"]
    /** @platform web */
    transition?: React.CSSProperties["transition"]
    /** @platform web */
    userSelect?: React.CSSProperties["userSelect"]
  }

  export interface FlexStyle {
    /** @platform web */
    gap?: number | string
  }

  export interface AccessibilityState {}

  export interface AccessibilityProps {}

  export interface KeyboardProps {
    /**
     * Called when a key is pressed down.
     * @platform web
     */
    onKeyDown?: (event: React.KeyboardEvent) => void
    /**
     * Called when a key is released.
     * @platform web
     */
    onKeyUp?: (event: React.KeyboardEvent) => void
  }

  export interface TextProps extends KeyboardProps {
    /** @platform web */
    href?: string
    /** @platform web */
    hrefAttrs?: {
      download?: true | string
      rel?: string
      target?: "blank" | "self" | "parent" | "top"
    }
  }

  export interface ViewProps extends KeyboardProps {
    /** @platform web */
    dataSet?: Record<string, any>
    /** @platform web */
    href?: string
    /** @platform web */
    hrefAttrs?: {
      download?: true | string
      rel?: string
      target?: "blank" | "self" | "parent" | "top"
    }
  }
}
