import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Box, Icon, Text } from "@md3-ui/core"

interface PreviewTitleProps {
  children?: React.ReactNode
}

export const PreviewTitle: React.FC<PreviewTitleProps> = ({ children }) => (
  <Box
    sx={{
      color: "onSurface",
      flexDirection: "row",
      gap: 1,
      mb: 1,
      mt: 2,
      mx: "auto",
    }}
  >
    <Text variant="bodyMedium">{children}</Text>
    <Icon as={MaterialCommunityIcons} name="information-outline" />
  </Box>
)
