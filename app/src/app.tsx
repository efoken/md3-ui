import { Md3Provider } from "@md3-ui/core"
import { StatusBar } from "expo-status-bar"
import * as React from "react"
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context"
import { NativeRouter, Route, Routes } from "react-router-native"
import { Layout } from "./layout"
import { HomeScreen } from "./screens/home-screen"
import { ThemesScreen } from "./screens/themes-screen"

const App: React.FC = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <Md3Provider>
      <StatusBar />
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="themes" element={<ThemesScreen />} />
          </Route>
        </Routes>
      </NativeRouter>
    </Md3Provider>
  </SafeAreaProvider>
)

export default App
