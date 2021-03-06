import { Box, BoxProps, Text, useTheme } from "@md3-ui/core"
import * as React from "react"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import { CodeContainer } from "./code-container"
import { CopyButton } from "./copy-button"
import scope from "./react-live-scope"

const EditableNotice: React.VFC<BoxProps> = ({ sx, ...props }) => (
  <Box
    pointerEvents="none"
    sx={{
      bgColor: "#011627",
      borderTopRadius: 8,
      position: "absolute",
      py: 1,
      top: -16,
      width: "100%",
      zIndex: 0,
      ...sx,
    }}
    {...props}
  >
    <Text
      variant="body-small"
      color="inverse-on-surface"
      sx={{
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

const ReactLiveBlock: React.VFC<ReactLiveBlockProps> = ({
  editable,
  rawCode,
  ...props
}) => {
  const theme = useTheme()
  const [editorCode, setEditorCode] = React.useState(rawCode.trim())

  const handleChange = (newCode: string) => {
    setEditorCode(newCode.trim())
  }

  const liveProviderProps = {
    code: editorCode,
    scope,
    ...props,
  }

  return (
    <LiveProvider {...liveProviderProps}>
      <LivePreview
        style={{
          borderRadius: 12,
          borderWidth: 1,
          fontFamily: theme.typeface.plain,
          marginTop: theme.spacing(2.5),
          overflowX: "auto",
          padding: theme.spacing(1.5),
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
      {editable && <LiveError style={{}} />}
    </LiveProvider>
  )
}

export default ReactLiveBlock
