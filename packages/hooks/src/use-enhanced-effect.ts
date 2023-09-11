import { isBrowser, isNative } from "@md3-ui/utils"
import { useEffect, useLayoutEffect } from "react"

export const useEnhancedEffect =
  isBrowser || isNative ? useLayoutEffect : useEffect
