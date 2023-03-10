import * as React from "react"
import { ScrollView } from "react-native"
import { ActionsPreview } from "../previews/actions-preview"

export const HomeScreen: React.FC = () => (
  <ScrollView style={{ flexGrow: 1 }}>
    <ActionsPreview />
  </ScrollView>
)
