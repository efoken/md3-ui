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

export const SidebarContent: React.FC<SidebarContentProps> = ({ routes }) => {
  const theme = useTheme()

  return (
    <>
      {routes.map((level1, i) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          sx={{
            borderBottomColor: "surfaceVariant",
            borderBottomWidth: 1,
            mt: 4,
            pb: 4,
          }}
        >
          {level1.heading && (
            <Text
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              as="h4"
              variant="labelLarge"
              sx={{ color: "onSurfaceVariant", mb: 2, ml: 6 }}
            >
              {level1.title}
            </Text>
          )}
          {level1.routes?.map((level2, j) => (
            <Box
              // eslint-disable-next-line react/no-array-index-key
              key={j}
              role="group"
              sx={{ mb: 0.5, mx: 1.5, px: 0.5 }}
            >
              <NextLink passHref href={level2.path ?? "/"}>
                <Pressable>
                  {({ hovered }) => (
                    <NavigationDrawerItem
                      label={level2.title}
                      role="presentation"
                      styles={{
                        label: {
                          ...theme.sys.typescale.bodyLarge,
                          color: theme.sys.color.onBackground,
                        },
                      }}
                      sx={{
                        backgroundColor: hovered ? "#e6e1e5" : undefined,
                        borderRadius: 14,
                        height: 44,
                        pointerEvents: "none",
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
