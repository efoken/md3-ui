import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  FlexStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface StackTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /** @default "column" */
    direction?: FlexStyle["flexDirection"]
    /** @default 0 */
    spacing?: number
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: StylesProp<{
      root?: RNViewStyle
      item?: RNViewStyle
    }>
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type StackProps<
  C extends React.ElementType = StackTypeMap["defaultAs"],
  P = {},
> = OverrideProps<StackTypeMap<P, C>, C>

export type StackStyleKey = keyof NonNullable<StackProps["styles"]>

const StackRoot = styled(RNView, {
  name: "Stack",
  slot: "Root",
})<OwnerStateProps<Pick<StackProps, "direction" | "spacing">>>(
  ({ theme, ownerState }) => ({
    flexDirection: ownerState.direction,
    gap: theme.spacing(ownerState.spacing ?? 0),
  }),
)

const StackItem = styled(RNView, {
  name: "Stack",
  slot: "Item",
  skipSx: true,
})()

export const Stack = React.forwardRef<RNView, StackProps>((inProps, ref) => {
  const {
    children,
    direction = "column",
    spacing = 0,
    style,
    styles,
    ...props
  } = useThemeProps({ name: "Stack", props: inProps })

  const ownerState = {
    direction,
    spacing,
  }

  return (
    <StackRoot
      ref={ref}
      ownerState={ownerState}
      style={[style, styles?.root]}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <StackItem style={styles?.item}>{child}</StackItem>
      ))}
    </StackRoot>
  )
}) as OverridableComponent<StackTypeMap>

if (__DEV__) {
  Stack.displayName = "Stack"
}
