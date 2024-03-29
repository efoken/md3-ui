import {
  OverridableComponent,
  OverrideProps,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { forwardRef } from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface CardActionsTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: StylesProp<{
      root?: RNViewStyle
    }>
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type CardActionsProps<
  C extends React.ElementType = CardActionsTypeMap["defaultAs"],
  P = {},
> = OverrideProps<CardActionsTypeMap<P, C>, C>

export type CardActionsStyleKey = keyof NonNullable<CardActionsProps["styles"]>

const CardActionsRoot = styled(RNView, {
  name: "CardActions",
  slot: "Root",
})({
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingBottom: 16,
  paddingHorizontal: 16,
})

export const CardActions = forwardRef<RNView, CardActionsProps>(
  (inProps, ref) => {
    const { style, styles, ...props } = useThemeProps({
      name: "CardActions",
      props: inProps,
    })

    return (
      <CardActionsRoot ref={ref} style={[style, styles?.root]} {...props} />
    )
  },
) as OverridableComponent<CardActionsTypeMap>

CardActions.displayName = "CardActions"
