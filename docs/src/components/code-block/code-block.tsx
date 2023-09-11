import { Box, useBoolean } from "@md3-ui/core"
import dynamic from "next/dynamic"
import { themes } from "prism-react-renderer"
import { useEffect } from "react"
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
  useEffect(on, [on])

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
    theme: themes.vsDark,
  }

  if (mounted && (language === "jsx" || language === "tsx") && live === true) {
    return <ReactLiveBlock editable {...reactLiveBlockProps} />
  }

  // TODO: Not sure if this is even used?
  if (mounted && render) {
    return (
      <Box sx={{ mt: 8 }}>
        <ReactLiveBlock editable={false} {...reactLiveBlockProps} />
      </Box>
    )
  }

  return (
    <Box as="div" sx={{ position: "relative", zIndex: 0 }}>
      <Box
        sx={{
          bgColor: "#1e1e1e",
          borderRadius: 8,
          my: 16,
          overflow: "hidden",
          px: 0,
          py: 10,
        }}
      >
        <Highlight
          codeString={rawCode}
          language={language}
          metastring={ln}
          showLines={viewlines}
          theme={themes.vsDark}
        />
      </Box>
      <CopyButton code={rawCode} sx={{ top: 4 }} />
    </Box>
  )
}
