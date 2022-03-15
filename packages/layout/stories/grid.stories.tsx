import { Meta, Story } from "@storybook/react"
import { Box, Grid, GridProps, Text } from "../src"

export default {
  title: "Layout/Grid",
  component: Grid,
} as Meta<GridProps>

export const Basic: Story = () => (
  <Grid container spacing={2}>
    <Grid item span={8}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=8</Text>
      </Box>
    </Grid>
    <Grid item span={4}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=4</Text>
      </Box>
    </Grid>
    <Grid item span={4}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=4</Text>
      </Box>
    </Grid>
    <Grid item span={8}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=8</Text>
      </Box>
    </Grid>
  </Grid>
)

export const MultipleBreakpoints: Story = () => (
  <Grid container spacing={2}>
    <Grid item span={{ compact: 6, medium: 8 }}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>compact=6 medium=8</Text>
      </Box>
    </Grid>
    <Grid item span={{ compact: 6, medium: 4 }}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>compact=6 medium=4</Text>
      </Box>
    </Grid>
    <Grid item span={{ compact: 6, medium: 4 }}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>compact=6 medium=4</Text>
      </Box>
    </Grid>
    <Grid item span={{ compact: 6, medium: 8 }}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>compact=6 medium=8</Text>
      </Box>
    </Grid>
  </Grid>
)

export const Spacing: Story<GridProps> = ({ spacing }) => (
  <Grid container spacing={2} sx={{ flexGrow: 1 }}>
    <Grid item span={12}>
      <Grid container spacing={spacing} sx={{ justifyContent: "center" }}>
        {[0, 1, 2].map((value) => (
          <Grid key={value} item>
            <Box
              sx={{ bgColor: "primary-container", height: 140, width: 100 }}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
)

Spacing.args = {
  spacing: 2,
}

export const RowColumnSpacing: Story = () => (
  <Grid
    container
    columnSpacing={{ compact: 1, medium: 2, expanded: 3 }}
    rowSpacing={1}
  >
    <Grid item span={6}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=6</Text>
      </Box>
    </Grid>
    <Grid item span={6}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=6</Text>
      </Box>
    </Grid>
    <Grid item span={6}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=6</Text>
      </Box>
    </Grid>
    <Grid item span={6}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=6</Text>
      </Box>
    </Grid>
  </Grid>
)

export const ResponsiveValues: Story = () => (
  <Grid
    container
    columns={{ compact: 4, medium: 8, expanded: 12 }}
    spacing={{ compact: 2, expanded: 3 }}
  >
    {[0, 1, 2, 3, 4, 5].map((index) => (
      <Grid key={index} item span={{ compact: 2, medium: 4 }}>
        <Box sx={{ bgColor: "primary-container", width: "100%" }}>
          <Text>compact=2 medium=4</Text>
        </Box>
      </Grid>
    ))}
  </Grid>
)

export const AutoLayout: Story = () => (
  <Grid container spacing={3}>
    <Grid item span>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span</Text>
      </Box>
    </Grid>
    <Grid item span={6}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=6</Text>
      </Box>
    </Grid>
    <Grid item span>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span</Text>
      </Box>
    </Grid>
  </Grid>
)

export const VariableWidthContent: Story = () => (
  <Grid container spacing={3}>
    <Grid item span="auto">
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>Variable width content</Text>
      </Box>
    </Grid>
    <Grid item span={6}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=6</Text>
      </Box>
    </Grid>
    <Grid item span>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span</Text>
      </Box>
    </Grid>
  </Grid>
)

export const NestedGrid: Story = () => {
  const row = (
    <>
      <Grid item span={4}>
        <Box sx={{ bgColor: "primary-container", width: "100%" }}>
          <Text>Item</Text>
        </Box>
      </Grid>
      <Grid item span={4}>
        <Box sx={{ bgColor: "primary-container", width: "100%" }}>
          <Text>Item</Text>
        </Box>
      </Grid>
      <Grid item span={4}>
        <Box sx={{ bgColor: "primary-container", width: "100%" }}>
          <Text>Item</Text>
        </Box>
      </Grid>
    </>
  )

  return (
    <Grid container spacing={1}>
      <Grid container item spacing={3}>
        {row}
      </Grid>
      <Grid container item spacing={3}>
        {row}
      </Grid>
      <Grid container item spacing={3}>
        {row}
      </Grid>
    </Grid>
  )
}

export const Columns: Story = () => (
  <Grid container spacing={2} columns={16}>
    <Grid item span={8}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=8</Text>
      </Box>
    </Grid>
    <Grid item span={8}>
      <Box sx={{ bgColor: "primary-container", width: "100%" }}>
        <Text>span=8</Text>
      </Box>
    </Grid>
  </Grid>
)
