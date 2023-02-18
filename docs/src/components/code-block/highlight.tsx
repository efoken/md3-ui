import { Box, Text } from "@md3-ui/core"
import BaseHighlight, {
  defaultProps,
  Language,
  PrismTheme,
} from "prism-react-renderer"
import * as React from "react"

const RE = /{([\d,-]+)}/

function calculateLinesToHighlight(meta?: string) {
  if (meta == null || !RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)![1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => Number.parseInt(x, 10)))

  return (index: number) => {
    const lineNumber = index + 1
    return lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    )
  }
}

interface HighlightProps {
  codeString: string
  language: Language
  metastring?: string
  showLines?: boolean
  theme: PrismTheme
}

export const Highlight: React.FC<HighlightProps> = ({
  codeString,
  language,
  metastring,
  showLines,
  theme,
}) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as="div"
          data-language={language}
          style={{
            fontFamily: '"Roboto Mono", monospace',
            fontSize: 16,
            overflowX: "auto",
          }}
        >
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })

              return (
                <Box
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  as="div"
                  sx={{
                    bgColor: shouldHighlightLine(i)
                      ? "whiteAlpha.200"
                      : undefined,
                    px: 5,
                  }}
                  {...lineProps}
                >
                  {showLines && (
                    <Text
                      as="span"
                      sx={{ mr: 12, fontSize: 14 }}
                      style={{ opacity: 0.5 }}
                    >
                      {i + 1}
                    </Text>
                  )}
                  {line.map((token, key) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Box>
              )
            })}
          </pre>
        </Box>
      )}
    </BaseHighlight>
  )
}
