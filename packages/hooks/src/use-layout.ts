import { useCallback, useState } from "react"
import { LayoutChangeEvent, LayoutRectangle } from "react-native"

export function useLayout() {
  const [layout, setLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  })

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => setLayout(event.nativeEvent.layout),
    [],
  )

  return {
    handleLayout,
    ...layout,
  }
}
