import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import {
  Badge,
  Icon,
  NavigationBar,
  NavigationBarItem,
  Snackbar,
  Text,
  TextButton,
} from "@md3-ui/core"
import * as React from "react"
import { Preview } from "../components/preview"
import { PreviewCard } from "../components/preview-card"
import { PreviewTitle } from "../components/preview-title"

export const CommunicationPreview: React.FC = () => {
  const [value, setValue] = React.useState("mail")
  const [showSnackbar, setShowSnackbar] = React.useState(false)

  return (
    <Preview>
      <Text variant="titleLarge" sx={{ mb: 2, textAlign: "center" }}>
        Communication
      </Text>
      <PreviewTitle>Badges</PreviewTitle>
      <PreviewCard>
        <NavigationBar
          value={value}
          sx={{ elevation: "level0" }}
          style={{ paddingBottom: 0 }}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <NavigationBarItem
            icon={
              <Badge max={999} value={1000}>
                <Icon
                  as={MaterialIcons}
                  name={value === "mail" ? "mail" : "mail-outline"}
                />
              </Badge>
            }
            label="Mail"
            value="mail"
          />
          <NavigationBarItem
            icon={
              <Badge value={10}>
                <Icon
                  as={MaterialIcons}
                  name={
                    value === "chat" ? "chat-bubble" : "chat-bubble-outline"
                  }
                />
              </Badge>
            }
            label="Chat"
            value="chat"
          />
          <NavigationBarItem
            icon={
              <Badge>
                <Icon
                  as={MaterialCommunityIcons}
                  name={
                    value === "rooms"
                      ? "account-group"
                      : "account-group-outline"
                  }
                />
              </Badge>
            }
            label="Rooms"
            value="rooms"
          />
          <NavigationBarItem
            icon={
              <Badge value={3}>
                <Icon
                  as={MaterialCommunityIcons}
                  name={value === "meet" ? "video" : "video-outline"}
                />
              </Badge>
            }
            label="Meet"
            value="meet"
          />
        </NavigationBar>
      </PreviewCard>
      <PreviewTitle>Snackbar</PreviewTitle>
      <PreviewCard>
        <TextButton onPress={() => setShowSnackbar(true)}>
          Show snackbar
        </TextButton>
        <Snackbar open={showSnackbar} message="This is a snackbar" />
      </PreviewCard>
    </Preview>
  )
}
