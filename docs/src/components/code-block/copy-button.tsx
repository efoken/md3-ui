import { ElevatedButton, ElevatedButtonProps } from "@md3-ui/core"
import copy from "copy-to-clipboard"
import { useCallback, useEffect, useState } from "react"

interface CopyButtonProps extends ElevatedButtonProps {
  code: string
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  code,
  sx,
  ...props
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    setCopied(copy(code))
  }, [code])

  useEffect(() => {
    let timeoutId: number | undefined

    if (copied) {
      timeoutId = window.setTimeout(() => {
        setCopied(false)
      }, 1500)
    }

    return () => {
      if (timeoutId != null) {
        window.clearTimeout(timeoutId)
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
