import { Box, NavigationDrawerItem, Text, useTheme } from "@md3-ui/core"
import NextLink from "next/link"
import * as React from "react"
import { Pressable } from "react-native"
import { Route } from "./types"

interface SidebarContentProps {
  // eslint-disable-next-line react/no-unused-prop-types
  contentRef: React.RefObject<HTMLElement>
  // eslint-disable-next-line react/no-unused-prop-types
  pathname: string
  routes: Route[]
}

export const SidebarContent: React.VFC<SidebarContentProps> = ({ routes }) => {
  const theme = useTheme()

  return (
    <>
      {routes.map((level1, i) => (
        <Box
          sx={{
            borderBottomColor: "surface-variant",
            borderBottomWidth: 1,
            mt: 2,
            pb: 2,
          }}
        >
          {level1.heading && (
            <Text
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              as="h4"
              variant="label-large"
              sx={{ color: "on-surface-variant", mb: 1, ml: 3 }}
            >
              {level1.title}
            </Text>
          )}
          {level1.routes?.map((level2, j) => (
            <Box
              // eslint-disable-next-line react/no-array-index-key
              key={j}
              accessibilityRole={"group" as any}
              sx={{ mb: 0.25, mx: 0.75, px: 0.25 }}
            >
              <NextLink passHref href={level2.path ?? "/"}>
                <Pressable>
                  {({ hovered }) => (
                    <NavigationDrawerItem
                      accessibilityRole="none"
                      label={level2.title}
                      pointerEvents="none"
                      styles={{
                        label: {
                          ...theme.typescale["body-large"],
                          color: theme.color["on-background"],
                        },
                      }}
                      sx={{
                        backgroundColor: hovered ? "#e6e1e5" : undefined,
                        borderRadius: 14,
                        height: 44,
                        transition: "background-color 200ms linear",
                      }}
                    />
                  )}
                </Pressable>
              </NextLink>
            </Box>
          ))}
        </Box>
      ))}
    </>
  )
}
