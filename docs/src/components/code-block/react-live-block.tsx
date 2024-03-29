import { Box, BoxProps, Text, useTheme } from "@md3-ui/core"
import { useState } from "react"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import { CodeContainer } from "./code-container"
import { CopyButton } from "./copy-button"
import scope from "./react-live-scope"

const EditableNotice: React.FC<BoxProps> = ({ sx, ...props }) => (
  <Box
    sx={{
      bgColor: "#1e1e1e",
      borderTopRadius: 8,
      pointerEvents: "none",
      position: "absolute",
      py: 2,
      top: -16,
      width: "100%",
      zIndex: 0,
      ...sx,
    }}
    {...props}
  >
    <Text
      variant="bodySmall"
      sx={{
        color: "inverseOnSurface",
        textAlign: "center",
      }}
    >
      Editable example
    </Text>
  </Box>
)

interface ReactLiveBlockProps {
  editable?: boolean
  rawCode: string
}

const ReactLiveBlock: React.FC<ReactLiveBlockProps> = ({
  editable,
  rawCode,
  ...props
}) => {
  const theme = useTheme()
  const [editorCode, setEditorCode] = useState(rawCode.trim())

  const handleChange = (newCode: string) => {
    setEditorCode(newCode.trim())
  }

  const liveProviderProps = {
    code: editorCode,
    enableTypeScript: true,
    scope,
    ...props,
  }

  return (
    <LiveProvider {...liveProviderProps}>
      <LivePreview
        style={{
          backgroundColor: theme.sys.color.surface,
          borderColor: theme.sys.color.outlineVariant,
          borderRadius: theme.sys.shape.corner.medium,
          borderWidth: 1,
          display: "flex",
          fontFamily: theme.ref.typeface.plain,
          gap: 12,
          marginTop: 20,
          overflowX: "auto",
          padding: 12,
          zIndex: 1,
        }}
      />
      <Box as="div" sx={{ position: "relative", zIndex: 0 }}>
        {editable && (
          <CodeContainer>
            <LiveEditor
              onChange={handleChange}
              style={{
                fontFamily: '"Roboto Mono", monospace',
                fontSize: 16,
                overflowX: "auto",
              }}
            />
          </CodeContainer>
        )}
        <CopyButton code={editorCode} />
        {editable && <EditableNotice />}
      </Box>
      {editable && <LiveError />}
    </LiveProvider>
  )
}

export default ReactLiveBlock
