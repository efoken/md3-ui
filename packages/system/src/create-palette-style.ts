import { get } from "@md3-ui/utils"
import { handleBreakpoints } from "./system/breakpoints"
import { RNStyle } from "./types"

export interface PaletteStyleOptions<PropKey> {
  styleProp?: PropKey | keyof RNStyle | (PropKey | keyof RNStyle)[] | false
  prop: PropKey
}

export function createPaletteStyle<PropKey extends string>({
  prop,
  styleProp = prop,
}: PaletteStyleOptions<PropKey>) {
  const fn = (props: Record<string, any>) => {
    if (props[prop] == null) {
      return null
    }

    const propValue = props[prop]
    const { theme } = props

    const styleFromPropValue = (propValueFinal: any) => {
      const value =
        get(theme, `sys.color.${propValueFinal}`) ??
        get(theme, `ref.palette.${propValueFinal}`, propValueFinal)

      return { [styleProp as string]: value }
    }

    return handleBreakpoints(props, propValue, styleFromPropValue)
  }

  fn.filterProps = [prop]

  return fn
}
