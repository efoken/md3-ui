import { styled } from "@md3-ui/styles"
import * as React from "react"
import { View } from "react-native"

export interface AppBarProps {}

const AppBarRoot = styled(View)(({ theme }) => ({
  backgroundColor: theme.color.surface.main,
  height: 64,
  width: "100%",
}))

export const AppBar: React.VFC = () => <AppBarRoot />
