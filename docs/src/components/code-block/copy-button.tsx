import { ElevatedButton, ElevatedButtonProps } from "@md3-ui/core"
import copy from "copy-to-clipboard"
import * as React from "react"

interface CopyButtonProps extends ElevatedButtonProps {
  code: string
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  code,
  sx,
  ...props
}) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = React.useCallback(() => {
    setCopied(copy(code))
  }, [code])

  React.useEffect(() => {
    let timeoutID: number | undefined

    if (copied) {
      timeoutID = window.setTimeout(() => {
        setCopied(false)
      }, 1500)
    }

    return () => {
      if (timeoutID != null) {
        window.clearTimeout(timeoutID)
      }
    }
  }, [copied])

  return (
    <ElevatedButton
      sx={{
        fontSize: 14,
        height: 24,
        position: "absolute",
        right: 16,
        top: 0,
        zIndex: 1,
        ...sx,
      }}
      {...props}
      onPress={handleCopy}
    >
      {copied ? "Copied" : "Copy"}
    </ElevatedButton>
  )
}
