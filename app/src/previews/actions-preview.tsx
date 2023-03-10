import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import {
  Box,
  Card,
  ElevatedButton,
  FilledButton,
  Grid,
  Icon,
  OutlinedButton,
  Stack,
  Text,
  TextButton,
  TonalButton,
} from "@md3-ui/core"
import { Add } from "@md3-ui/icons"
import * as React from "react"

export const ActionsPreview: React.FC = () => (
  <Card variant="filled" sx={{ bgColor: "surfaceContainer", px: 1, py: 5 }}>
    <Text variant="titleLarge" sx={{ mb: 2, textAlign: "center" }}>
      Actions
    </Text>
    <Text sx={{ mb: 1, textAlign: "center" }}>
      Common buttons <Icon as={MaterialIcons} name="info-outline" />
    </Text>
    <Box
      sx={{
        bgColor: "background",
        borderColor: "outline",
        borderRadius: 12,
        borderWidth: 1,
        px: 6,
        py: 4,
      }}
    >
      <Grid container spacing={4}>
        <Grid item span={4}>
          <Stack spacing={4} sx={{ width: "100%" }}>
            <ElevatedButton>Elevated</ElevatedButton>
            <FilledButton>Filled</FilledButton>
            <TonalButton>Filled tonal</TonalButton>
            <OutlinedButton>Outlined</OutlinedButton>
            <TextButton>Text</TextButton>
          </Stack>
        </Grid>
        <Grid item span={4}>
          <Stack spacing={4} sx={{ width: "100%" }}>
            <ElevatedButton icon={<Icon as={MaterialIcons} name="add" />}>
              Icon
            </ElevatedButton>
            <FilledButton icon={<Icon as={MaterialIcons} name="add" />}>
              Icon
            </FilledButton>
            <TonalButton icon={<Add />}>Icon</TonalButton>
            <OutlinedButton icon={<Add />}>Icon</OutlinedButton>
            <TextButton icon={<Icon as={MaterialIcons} name="add" />}>
              Icon
            </TextButton>
          </Stack>
        </Grid>
        <Grid item span={4}>
          <Stack spacing={4} sx={{ width: "100%" }}>
            <ElevatedButton disabled>Elevated</ElevatedButton>
            <FilledButton disabled>Filled</FilledButton>
            <TonalButton disabled>Filled tonal</TonalButton>
            <OutlinedButton disabled>Outlined</OutlinedButton>
            <TextButton disabled>Text</TextButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Card>
)
