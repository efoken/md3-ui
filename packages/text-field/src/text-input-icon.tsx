import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Text as RNText,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface TextInputIconTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component, normally an `IconButton` or string.
     */
    children?: React.ReactNode
    /**
     * The position this adornment should appear relative to the `TextInput`.
     */
    position: "start" | "end"
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: {
      root?: RNViewStyle
    }
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type TextInputIconProps<
  C extends React.ElementType = TextInputIconTypeMap["defaultAs"],
  P = {},
> = OverrideProps<TextInputIconTypeMap<P, C>, C>

export type TextInputIconStyleKey = keyof NonNullable<
  TextInputIconProps["styles"]
>

const TextInputIconRoot = styled(RNView, {
  name: "TextInputIcon",
  slot: "Root",
})<OwnerStateProps<Pick<TextInputIconProps, "position">>>(({ ownerState }) => ({
  ...(ownerState.position === "start" && {
    marginEnd: 8,
  }),

  ...(ownerState.position === "end" && {
    marginStart: 8,
  }),
}))

export const TextInputIcon = React.forwardRef<RNView, TextInputIconProps>(
  (inProps, ref) => {
    const { children, position, style, styles, ...props } = useThemeProps({
      name: "TextInputIcon",
      props: inProps,
    })

    const ownerState = {
      position,
    }

    return (
      <TextInputIconRoot
        ref={ref}
        ownerState={ownerState}
        style={[style, styles?.root]}
        {...props}
      >
        {typeof children === "string" ? <RNText>{children}</RNText> : children}
      </TextInputIconRoot>
    )
  },
) as OverridableComponent<TextInputIconTypeMap>

if (__DEV__) {
  TextInputIcon.displayName = "TextInputIcon"
}
