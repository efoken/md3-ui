import { Box, Stack, Text } from "@md3-ui/core"
import * as propsDocs from "@md3-ui/props-docs"
import * as React from "react"
import { MDXComponents } from "../mdx-components"
import { convertBackticksToInlineCode } from "../utils/convert-backticks-to-inline-code"

export interface PropsTableProps {
  of: keyof typeof propsDocs
  omit?: string[] | null
  only?: string[] | null
}

function makePropsTable({ of, omit, only }: PropsTableProps) {
  const props = propsDocs[of]?.props

  if (!props) {
    return []
  }

  return Object.entries(props)
    .filter(([name]) => {
      if (Array.isArray(only) && !only.includes(name)) {
        return false
      }
      if (Array.isArray(omit) && omit.includes(name)) {
        return false
      }
      return true
    })
    .map(([name, value]) => ({
      name,
      required: value.required,
      type: cleanType(value.type.name),
      defaultValue: cleanDefaultValue(value.defaultValue?.value),
      description: value.description,
    }))
}

function cleanType(value: any) {
  return typeof value === "string" ? value.replace(";", "") : value
}

function cleanDefaultValue(value: any) {
  return typeof value === "boolean" ? value.toString() : value
}

export const PropsTable: React.FC<PropsTableProps> = ({
  of,
  omit = ["layerStyle", "noOfLines", "textStyle", "orientation", "styleConfig"],
  only,
}) => {
  const propList = React.useMemo(
    () => makePropsTable({ of, omit, only }),
    [of, omit, only],
  )

  if (propList.length === 0) {
    return null
  }

  return (
    <Stack>
      {propList.map((prop) => (
        <Box key={prop.name} as="div" sx={{ width: "100%" }}>
          <Box
            as="div"
            sx={{
              borderStartColor: "primaryContainer",
              borderStartWidth: 3,
              fontSize: 16,
              my: 5,
              ps: 5,
              textAlign: "left",
            }}
          >
            <Text sx={{ fontWeight: "700" }}>{prop.name}</Text>
            <span aria-hidden>{prop.required ? ":" : "?:"}</span>{" "}
            <Text sx={{ color: "onSurfaceVariant" }}>{prop.type}</Text>
            <Text as="p" variant="bodyLarge" sx={{ my: 0 }}>
              {prop.defaultValue && (
                <>
                  Default{" "}
                  <MDXComponents.code>{prop.defaultValue}</MDXComponents.code>.
                </>
              )}{" "}
              {convertBackticksToInlineCode(prop.description)}
            </Text>
          </Box>
        </Box>
      ))}
    </Stack>
  )
}

export default PropsTable
