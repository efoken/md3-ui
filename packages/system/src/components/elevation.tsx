import * as React from "react"
import {
  AnimatableNumericValue,
  Platform,
  View as RNView,
  ViewStyle as RNViewStyle,
  StyleProp,
} from "react-native"
import { styled } from "../create-styled"
import { StyleSheet } from "../style-sheet"
import { OwnerStateProps } from "../types"

export interface ElevationProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /** @ignore */
  style?: StyleProp<RNViewStyle>
  /**
   * The surface tint color.
   */
  surfaceTintColor?: string
}

const ElevationSurface = styled(RNView, {
  name: "Elevation",
  slot: "Surface",
})<
  OwnerStateProps<{
    borderRadius?: AnimatableNumericValue
    opacity: number
    surfaceTintColor?: string
  }>
>(({ ownerState, theme }) => ({
  backgroundColor: ownerState.surfaceTintColor ?? theme.sys.color.primary,
  borderRadius:
    Platform.OS === "web" ? ("inherit" as any) : ownerState.borderRadius,
  bottom: 0,
  left: 0,
  opacity: ownerState.opacity,
  position: "absolute",
  right: 0,
  top: 0,
  transition: theme.sys.motion.create("opacity", {
    duration: 280,
    easing: theme.sys.motion.easing.emphasized,
  }),
  zIndex: -1,
}))

export const Elevation: React.FC<ElevationProps> = ({
  children,
  style,
  surfaceTintColor,
}) => {
  const { borderRadius, elevation = 0 } = StyleSheet.flatten([style])

  const opacity = React.useMemo(
    () => (4.5 * Math.log(elevation + 1) + 2) / 100,
    [elevation],
  )

  const ownerState = {
    borderRadius,
    opacity,
    surfaceTintColor,
  }

  return (
    <>
      {children}
      {elevation > 0 && <ElevationSurface ownerState={ownerState} />}
    </>
  )
}

Elevation.displayName = "Elevation"
