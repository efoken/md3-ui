import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import {
  AppBar,
  Box,
  Icon,
  NavigationBar,
  NavigationBarItem,
  Text,
  Toolbar,
} from "@md3-ui/core"
import * as React from "react"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { Outlet, useLocation, useNavigate } from "react-router-native"

export const Layout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Box sx={{ height: "100%" }}>
      <AppBar style={{ marginTop: getStatusBarHeight() }}>
        <Toolbar>
          <Text variant="titleLarge" sx={{ flexGrow: 1, textAlign: "center" }}>
            Title Large
          </Text>
        </Toolbar>
      </AppBar>
      <Outlet />
      <NavigationBar value={location.pathname}>
        <NavigationBarItem
          icon={<Icon as={MaterialIcons} name="widgets" />}
          label="Components"
          value="/"
          onPress={() => navigate("/")}
        />
        <NavigationBarItem
          icon={<Icon as={MaterialIcons} name="change-history" />}
          label="Themes"
          value="/themes"
          onPress={() => navigate("/themes")}
        />
      </NavigationBar>
    </Box>
  )
}
