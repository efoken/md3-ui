/* eslint-disable unicorn/filename-case */
import {
  AppBar,
  Button,
  Md3Provider,
  Text,
  TextField,
  Toolbar,
} from "@md3-ui/core"
import { StatusBar } from "expo-status-bar"
import * as React from "react"
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context"

const App: React.FC = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <StatusBar />
    <Md3Provider>
      <SafeAreaView>
        <AppBar>
          <Toolbar>
            <Text
              variant="title-large"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              Title Large
            </Text>
          </Toolbar>
        </AppBar>
        <Button variant="filled">Filled button</Button>
        <Button variant="tonal">Tonal button</Button>
        <Button variant="outlined">Outlined button</Button>
        <Button variant="text">Text button</Button>
        <TextField label="Label" placeholder="Placeholder" variant="outlined" />
        <TextField label="Label" placeholder="Placeholder" variant="outlined" />
        <Text variant="display-large">Display Large</Text>
        <Text variant="display-medium">Display Medium</Text>
        <Text variant="display-small">Display Small</Text>
        <Text variant="headline-large">Headline Large</Text>
        <Text variant="headline-medium">Headline Medium</Text>
        <Text variant="headline-small">Headline Small</Text>
        <Text variant="title-large">Title Large</Text>
        <Text variant="title-medium">Title Medium</Text>
        <Text variant="title-small">Title Small</Text>
        <Text variant="label-large">Label Large</Text>
        <Text variant="label-medium">Label Medium</Text>
        <Text variant="label-small">Label Small</Text>
        <Text variant="body-large">Body Large</Text>
        <Text variant="body-medium">Body Medium</Text>
        <Text variant="body-small">Body Small</Text>
      </SafeAreaView>
    </Md3Provider>
  </SafeAreaProvider>
)

export default App
