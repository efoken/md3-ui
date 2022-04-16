import { Box, Button } from "@md3-ui/core"
import * as React from "react"
import { ScrollView } from "react-native"

export const HomeScreen: React.FC = () => (
  <ScrollView style={{ flexGrow: 1 }}>
    <Box sx={{ p: 2 }}>
      <Button variant="filled" sx={{ mb: 2 }}>
        Buttons
      </Button>
      <Button variant="filled" sx={{ mb: 2 }}>
        Chips
      </Button>
    </Box>
  </ScrollView>
)
