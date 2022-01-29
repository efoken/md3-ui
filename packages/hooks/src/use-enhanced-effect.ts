import { isBrowser, isNative } from "@md3-ui/utils"
import * as React from "react"

export const useEnhancedEffect =
  isBrowser || isNative ? React.useLayoutEffect : React.useEffect
