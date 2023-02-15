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

  export interface ImageStyle {
    objectFit?: React.CSSProperties["objectFit"]
  }

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
    outlineColor?: React.CSSProperties["outlineColor"]
    /** @platform web */
    outlineOffset?: React.CSSProperties["outlineOffset"]
    /** @platform web */
    outlineStyle?: React.CSSProperties["outlineStyle"]
    /** @platform web */
    outlineWidth?: React.CSSProperties["outlineWidth"]
    pointerEvents?: React.CSSProperties["pointerEvents"]
    /** @platform web */
    transition?: React.CSSProperties["transition"]
    userSelect?: React.CSSProperties["userSelect"]
    /** @platform web */
    visibility?: React.CSSProperties["visibility"]
  }

  export interface AccessibilityProps {
    /** @platform web */
    "aria-describedby"?: string
    /** @platform web */
    "aria-invalid"?: boolean
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
    tabIndex?: 0 | -1
  }

  export interface TouchableWithoutFeedbackProps extends KeyboardProps {
    tabIndex?: 0 | -1
  }
}
