import { Theme } from "@md3-ui/theme"
import { Text as RNText } from "react-native"
import { createText } from "../create-text"
import { OverridableComponent, OverrideProps, SxProps } from "../types"

export interface TextTypeMap<
  P = {},
  C extends React.ElementType = typeof RNText,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
    /** @default "inherit" */
    variant?: "inherit" | keyof Theme["sys"]["typescale"]
  }
  defaultAs: C
}

export type TextProps<
  C extends React.ElementType = TextTypeMap["defaultAs"],
  P = {},
> = OverrideProps<TextTypeMap<P, C>, C>

export const Text = createText({
  name: "Text",
}) as OverridableComponent<TextTypeMap>

Text.displayName = "Text"
