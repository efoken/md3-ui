import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Icon, NavigationBar, NavigationBarItem, Text } from "@md3-ui/core"
import { useState } from "react"
import { Preview } from "../components/preview"
import { PreviewCard } from "../components/preview-card"
import { PreviewTitle } from "../components/preview-title"

export const NavigationPreview: React.FC = () => {
  const [value, setValue] = useState("explore")

  return (
    <Preview>
      <Text variant="titleLarge" sx={{ mb: 2, textAlign: "center" }}>
        Navigation
      </Text>
      <PreviewTitle>Navigation bar</PreviewTitle>
      <PreviewCard>
        <NavigationBar
          value={value}
          sx={{ elevation: "level0" }}
          style={{ paddingBottom: 0 }}
          onChange={(event, newValue) => setValue(newValue)}
        >
          <NavigationBarItem
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name={value === "mail" ? "compass" : "compass-outline"}
              />
            }
            label="Explore"
            value="explore"
          />
          <NavigationBarItem
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name={value === "pets" ? "paw" : "paw-outline"}
              />
            }
            label="Pets"
            value="pets"
          />
          <NavigationBarItem
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name={value === "account" ? "account" : "account-outline"}
              />
            }
            label="Account"
            value="account"
          />
        </NavigationBar>
      </PreviewCard>
    </Preview>
  )
}
