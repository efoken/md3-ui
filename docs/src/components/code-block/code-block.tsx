import { Box, useBoolean } from "@md3-ui/core"
import dynamic from "next/dynamic"
import theme from "prism-react-renderer/themes/vsDark"
import * as React from "react"
import { CopyButton } from "./copy-button"
import { Highlight } from "./highlight"

const ReactLiveBlock = dynamic(() => import("./react-live-block"))

interface CodeBlockProps {
  children: React.ReactElement
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children: childrenProp,
}) => {
  const [mounted, { on }] = useBoolean()
  // Lazily-load <ReactLiveBlock /> to save bundle size.
  React.useEffect(on, [on])

  const {
    children,
    className,
    live: liveProp = true,
    ln,
    manual,
    mountStylesheet = false,
    render,
    viewlines,
  } = childrenProp.props

  const live = liveProp === "true" || liveProp === true

  const language = className?.replace(/language-/, "")
  const rawCode = children.trim()

  const reactLiveBlockProps = {
    language,
    mountStylesheet,
    noInline: manual,
    rawCode,
    theme,
  }

  if (mounted && (language === "jsx" || language === "tsx") && live === true) {
    return <ReactLiveBlock editable {...reactLiveBlockProps} />
  }

  // TODO: Not sure if this is even used?
  if (mounted && render) {
    return (
      <Box sx={{ mt: 4 }}>
        <ReactLiveBlock editable={false} {...reactLiveBlockProps} />
      </Box>
    )
  }

  return (
    <Box as="div" sx={{ position: "relative", zIndex: 0 }}>
      <Box
        sx={{
          bgColor: "#011627",
          borderRadius: 8,
          my: 8,
          overflow: "hidden",
          px: 0,
          py: 5,
        }}
      >
        <Highlight
          codeString={rawCode}
          language={language}
          metastring={ln}
          showLines={viewlines}
          theme={theme}
        />
      </Box>
      <CopyButton code={rawCode} sx={{ top: 4 }} />
    </Box>
  )
}
