import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import {
  Box,
  ElevatedButton,
  FilledButton,
  FilledIconButton,
  Grid,
  Icon,
  IconButton,
  OutlinedButton,
  OutlinedIconButton,
  Stack,
  Text,
  TextButton,
  TonalButton,
  TonalIconButton,
} from "@md3-ui/core"
import * as React from "react"
import { Preview } from "../components/preview"
import { PreviewCard } from "../components/preview-card"
import { PreviewTitle } from "../components/preview-title"

export const ActionsPreview: React.FC = () => {
  const [selected, setSelected] = React.useState(
    Array.from<boolean>({ length: 8 }).fill(false),
  )

  const handleSelect = (i: number) => () =>
    setSelected((prevIconButtonState) => {
      const nextIconButtonState = [...prevIconButtonState]
      nextIconButtonState[i] = !nextIconButtonState[i]
      return nextIconButtonState
    })

  return (
    <Preview>
      <Text variant="titleLarge" sx={{ mb: 2, textAlign: "center" }}>
        Actions
      </Text>
      <PreviewTitle>Common buttons</PreviewTitle>
      <PreviewCard>
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
              <TonalButton icon={<Icon as={MaterialIcons} name="add" />}>
                Icon
              </TonalButton>
              <OutlinedButton icon={<Icon as={MaterialIcons} name="add" />}>
                Icon
              </OutlinedButton>
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
      </PreviewCard>
      <PreviewTitle>Icon buttons</PreviewTitle>
      <PreviewCard>
        <Box
          sx={{
            justifyContent: "space-around",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <IconButton selected={selected[0]} onPress={handleSelect(0)}>
            <Icon
              as={MaterialCommunityIcons}
              name={selected[0] ? "cog" : "cog-outline"}
            />
          </IconButton>
          <FilledIconButton selected={selected[1]} onPress={handleSelect(1)}>
            <Icon
              as={MaterialCommunityIcons}
              name={selected[1] ? "cog" : "cog-outline"}
            />
          </FilledIconButton>
          <TonalIconButton selected={selected[2]} onPress={handleSelect(2)}>
            <Icon
              as={MaterialCommunityIcons}
              name={selected[2] ? "cog" : "cog-outline"}
            />
          </TonalIconButton>
          <OutlinedIconButton selected={selected[3]} onPress={handleSelect(3)}>
            <Icon
              as={MaterialCommunityIcons}
              name={selected[3] ? "cog" : "cog-outline"}
            />
          </OutlinedIconButton>
        </Box>
        <Box
          sx={{
            justifyContent: "space-around",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <IconButton disabled>
            <Icon as={MaterialCommunityIcons} name="cog-outline" />
          </IconButton>
          <FilledIconButton disabled>
            <Icon as={MaterialCommunityIcons} name="cog-outline" />
          </FilledIconButton>
          <TonalIconButton disabled>
            <Icon as={MaterialCommunityIcons} name="cog-outline" />
          </TonalIconButton>
          <OutlinedIconButton disabled>
            <Icon as={MaterialCommunityIcons} name="cog-outline" />
          </OutlinedIconButton>
        </Box>
      </PreviewCard>
    </Preview>
  )
}
