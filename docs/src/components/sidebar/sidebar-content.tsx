import { Box, Text } from "@md3-ui/core"
import NextLink from "next/link"
import { Pressable } from "react-native"
import { Route } from "./types"

interface SidebarContentProps {
  // eslint-disable-next-line react/no-unused-prop-types
  contentRef: React.RefObject<HTMLElement>
  // eslint-disable-next-line react/no-unused-prop-types
  pathname: string
  routes: Route[]
}

export const SidebarContent: React.FC<SidebarContentProps> = ({
  pathname,
  routes,
}) => (
  <>
    {routes.map((level1, i) => (
      <Box key={i} sx={{ mb: 2 }}>
        {level1.heading && (
          <Text
            key={i}
            as="p"
            variant="labelLarge"
            sx={{
              color: "onSurface",
              mb: 2,
              mt: 0,
              px: 2.5,
              textTransform: "uppercase",
            }}
          >
            {level1.title}
          </Text>
        )}
        <Box role="group" sx={{ mb: 4 }}>
          {level1.routes?.map((level2, j) => (
            <Box key={j} sx={{ mb: 2 }}>
              <NextLink legacyBehavior passHref href={level2.path ?? "/"}>
                <Pressable style={{ textDecoration: "none" } as any}>
                  {({ hovered }) => {
                    const selected = pathname === level2.path

                    return (
                      <Text
                        variant="bodyLarge"
                        sx={{
                          color: hovered ? "onSurface" : "onSurfaceVariant",
                          backgroundColor: selected ? "#e6e1e5" : undefined,
                          borderRadius: 4,
                          pointerEvents: "none",
                          px: 2.5,
                          py: 0.5,
                          transition: "background-color 200ms linear",
                        }}
                      >
                        {level2.title}
                      </Text>
                    )
                  }}
                </Pressable>
              </NextLink>
            </Box>
          ))}
        </Box>
      </Box>
    ))}
  </>
)
