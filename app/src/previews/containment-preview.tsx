import { Box, Card, CardContent, Divider, Text } from "@md3-ui/core"
import { Preview } from "../components/preview"
import { PreviewCard } from "../components/preview-card"
import { PreviewTitle } from "../components/preview-title"

export const ContainmentPreview: React.FC = () => (
  <Preview>
    <Text variant="titleLarge" sx={{ mb: 2, textAlign: "center" }}>
      Containment
    </Text>
    <PreviewTitle>Cards</PreviewTitle>
    <PreviewCard>
      <Box
        sx={{
          justifyContent: "space-around",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Card variant="elevated">
          <CardContent>
            <Text variant="bodyMedium">Elevated</Text>
          </CardContent>
        </Card>
        <Card variant="filled">
          <CardContent>
            <Text variant="bodyMedium">Filled</Text>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <Text variant="bodyMedium">Outlined</Text>
          </CardContent>
        </Card>
      </Box>
    </PreviewCard>
    <PreviewTitle>Dividers</PreviewTitle>
    <PreviewCard>
      <Divider />
    </PreviewCard>
  </Preview>
)
