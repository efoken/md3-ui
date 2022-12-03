import * as React from "react"

declare module "react-native" {
  export interface PressableStateCallbackType {
    readonly focused: boolean
    readonly hovered: boolean
  }

  export interface AppParams {
    callback?: () => void
    hydrate?: boolean
    initialProps?: object
    rootTag: HTMLElement
  }

  export namespace AppRegistry {
    function getApplication(
      appKey: string,
      params?: AppParams,
    ): {
      element: HTMLElement
      getStyleElement: () => React.ReactElement
    }
  }

  export interface TextStyle {}

  export interface ViewStyle {
    /** @platform web */
    animationDuration?: React.CSSProperties["animationDuration"]
    /** @platform web */
    animationKeyframes?: Record<string, ViewStyle>
    /** @platform web */
    animationFillMode?: React.CSSProperties["animationFillMode"]
    /** @platform web */
    animationName?: React.CSSProperties["animationName"]
    /** @platform web */
    animationTimingFunction?: React.CSSProperties["animationTimingFunction"]
    /** @platform web */
    boxShadow?: React.CSSProperties["boxShadow"]
    /** @platform web */
    cursor?: React.CSSProperties["cursor"]
    /** @platform web */
    gridTemplateColumns?: React.CSSProperties["gridTemplateColumns"]
    /** @platform web */
    outlineStyle?: React.CSSProperties["outlineStyle"]
    /** @platform web */
    outlineWidth?: React.CSSProperties["outlineWidth"]
    /** @platform web */
    pointerEvents?: React.CSSProperties["pointerEvents"]
    /** @platform web */
    transition?: React.CSSProperties["transition"]
    /** @platform web */
    userSelect?: React.CSSProperties["userSelect"]
    /** @platform web */
    visibility?: React.CSSProperties["visibility"]
  }

  export interface FlexStyle {
    /** @platform web */
    gap?: number | string
  }

  export interface AccessibilityState {}

  export interface AccessibilityProps {
    /** @platform web */
    accessibilityDescribedBy?: string
    /** @platform web */
    accessibilityHidden?: boolean
    /** @platform web */
    accessibilityInvalid?: boolean
    /** @platform web */
    accessibilityLabelledBy?: string
  }

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
    dir?: string
    /** @platform web */
    href?: string
    /** @platform web */
    hrefAttrs?: {
      download?: true | string
      rel?: string
      target?: "blank" | "self" | "parent" | "top"
    }
    /** @platform web */
    lang?: string
    /** @platform web */
    onAnimationEnd?: (event: React.AnimationEvent) => void
    /** @platform web */
    onAnimationStart?: (event: React.AnimationEvent) => void
  }

  export interface TouchableWithoutFeedbackProps extends KeyboardProps {
    /** @platform web */
    focusable?: boolean
  }
}
