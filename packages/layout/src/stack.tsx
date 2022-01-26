import { OwnerStateProps, styled, useThemeProps } from "@md3-ui/styles"
import { OverridableComponent, OverrideProps } from "@md3-ui/utils"
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
    children?: React.ReactNode
    /** @default "column" */
    direction?: FlexStyle["flexDirection"]
    /** @default 0 */
    spacing?: number
    styles?: {
      root?: RNViewStyle
      item?: RNViewStyle
    }
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
    marginLeft: -theme.spacing(ownerState.spacing),
    marginTop: -theme.spacing(ownerState.spacing),
  }),
)

const StackItem = styled(RNView, {
  name: "Stack",
  slot: "Item",
})<OwnerStateProps<Pick<StackProps, "direction" | "spacing">>>(
  ({ theme, ownerState }) => ({
    marginLeft: theme.spacing(ownerState.spacing),
    marginTop: theme.spacing(ownerState.spacing),
  }),
)

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
        <StackItem ownerState={ownerState} style={styles?.item}>
          {child}
        </StackItem>
      ))}
    </StackRoot>
  )
}) as OverridableComponent<StackTypeMap>
