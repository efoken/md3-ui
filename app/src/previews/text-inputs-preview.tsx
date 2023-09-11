import { Box, Text, TextField } from "@md3-ui/core"
import { Preview } from "../components/preview"
import { PreviewCard } from "../components/preview-card"
import { PreviewTitle } from "../components/preview-title"

export const TextInputsPreview: React.FC = () => (
  <Preview>
    <Text variant="titleLarge" sx={{ mb: 2, textAlign: "center" }}>
      Text inputs
    </Text>
    <PreviewTitle>Text fields</PreviewTitle>
    <PreviewCard>
      <Box>
        <TextField
          label="Filled"
          variant="filled"
          helperText="Supporting text"
        />
        <TextField
          error
          label="Filled"
          variant="filled"
          helperText="Error text"
        />
        <TextField
          aria-disabled
          label="Disabled"
          variant="filled"
          helperText="Supporting text"
        />
      </Box>
      <Box>
        <TextField
          label="Outlined"
          variant="outlined"
          helperText="Supporting text"
        />
        <TextField
          error
          label="Outlined"
          variant="outlined"
          helperText="Error text"
        />
        <TextField
          aria-disabled
          label="Disabled"
          variant="outlined"
          helperText="Supporting text"
        />
      </Box>
    </PreviewCard>
  </Preview>
)
