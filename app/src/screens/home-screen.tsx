import { Box } from "@md3-ui/core"
import * as React from "react"
import { ScrollView } from "react-native"
import { ActionsPreview } from "../previews/actions-preview"
import { CommunicationPreview } from "../previews/communication-preview"
import { ContainmentPreview } from "../previews/containment-preview"
import { NavigationPreview } from "../previews/navigation-preview"
import { TextInputsPreview } from "../previews/text-inputs-preview"

export const HomeScreen: React.FC = () => (
  <ScrollView style={{ flexGrow: 1 }}>
    <Box sx={{ gap: 3 }}>
      <ActionsPreview />
      <CommunicationPreview />
      <ContainmentPreview />
      <NavigationPreview />
      <TextInputsPreview />
    </Box>
  </ScrollView>
)
