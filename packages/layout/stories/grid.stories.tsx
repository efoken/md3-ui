import { Meta, StoryObj } from "@storybook/react"
import { Box, Grid, GridProps, Text } from "../src"

export default {
  title: "Layout/Grid",
  component: Grid,
} as Meta<GridProps>

export const Basic: StoryObj = {
  render: () => (
    <Grid container spacing={4}>
      <Grid item span={8}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=8</Text>
        </Box>
      </Grid>
      <Grid item span={4}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=4</Text>
        </Box>
      </Grid>
      <Grid item span={4}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=4</Text>
        </Box>
      </Grid>
      <Grid item span={8}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=8</Text>
        </Box>
      </Grid>
    </Grid>
  ),
}

export const MultipleBreakpoints: StoryObj = {
  render: () => (
    <Grid container spacing={4}>
      <Grid item span={{ compact: 6, medium: 8 }}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>compact=6 medium=8</Text>
        </Box>
      </Grid>
      <Grid item span={{ compact: 6, medium: 4 }}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>compact=6 medium=4</Text>
        </Box>
      </Grid>
      <Grid item span={{ compact: 6, medium: 4 }}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>compact=6 medium=4</Text>
        </Box>
      </Grid>
      <Grid item span={{ compact: 6, medium: 8 }}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>compact=6 medium=8</Text>
        </Box>
      </Grid>
    </Grid>
  ),
}

export const Spacing: StoryObj<GridProps> = {
  render: ({ spacing }) => (
    <Grid container spacing={4} sx={{ flexGrow: 1 }}>
      <Grid item span={12}>
        <Grid container spacing={spacing} sx={{ justifyContent: "center" }}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Box
                sx={{ bgColor: "primaryContainer", height: 140, width: 100 }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ),
  args: {
    spacing: 4,
  },
}

export const RowColumnSpacing: StoryObj = {
  render: () => (
    <Grid
      container
      columnSpacing={{ compact: 1, medium: 2, expanded: 3 }}
      rowSpacing={2}
    >
      <Grid item span={6}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=6</Text>
        </Box>
      </Grid>
      <Grid item span={6}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=6</Text>
        </Box>
      </Grid>
      <Grid item span={6}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=6</Text>
        </Box>
      </Grid>
      <Grid item span={6}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=6</Text>
        </Box>
      </Grid>
    </Grid>
  ),
}

export const ResponsiveValues: StoryObj = {
  render: () => (
    <Grid
      container
      columns={{ compact: 4, medium: 8, expanded: 12 }}
      spacing={{ compact: 2, expanded: 3 }}
    >
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <Grid key={index} item span={{ compact: 2, medium: 4 }}>
          <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
            <Text>compact=2 medium=4</Text>
          </Box>
        </Grid>
      ))}
    </Grid>
  ),
}

export const AutoLayout: StoryObj = {
  render: () => (
    <Grid container spacing={6}>
      <Grid item span>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span</Text>
        </Box>
      </Grid>
      <Grid item span={6}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=6</Text>
        </Box>
      </Grid>
      <Grid item span>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span</Text>
        </Box>
      </Grid>
    </Grid>
  ),
}

export const VariableWidthContent: StoryObj = {
  render: () => (
    <Grid container spacing={6}>
      <Grid item span="auto">
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>Variable width content</Text>
        </Box>
      </Grid>
      <Grid item span={6}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=6</Text>
        </Box>
      </Grid>
      <Grid item span>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span</Text>
        </Box>
      </Grid>
    </Grid>
  ),
}

export const NestedGrid: StoryObj = {
  render: () => {
    const row = (
      <>
        <Grid item span={4}>
          <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
            <Text>Item</Text>
          </Box>
        </Grid>
        <Grid item span={4}>
          <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
            <Text>Item</Text>
          </Box>
        </Grid>
        <Grid item span={4}>
          <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
            <Text>Item</Text>
          </Box>
        </Grid>
      </>
    )

    return (
      <Grid container spacing={2}>
        <Grid container item spacing={6}>
          {row}
        </Grid>
        <Grid container item spacing={6}>
          {row}
        </Grid>
        <Grid container item spacing={6}>
          {row}
        </Grid>
      </Grid>
    )
  },
}

export const Columns: StoryObj = {
  render: () => (
    <Grid container spacing={4} columns={16}>
      <Grid item span={8}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=8</Text>
        </Box>
      </Grid>
      <Grid item span={8}>
        <Box sx={{ bgColor: "primaryContainer", width: "100%" }}>
          <Text>span=8</Text>
        </Box>
      </Grid>
    </Grid>
  ),
}
