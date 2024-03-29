import { Theme } from "@md3-ui/theme"
import { get, isFunction } from "@md3-ui/utils"
import { handleBreakpoints } from "./system/breakpoints"
import { RNStyle } from "./types"
import { merge } from "./utils/merge"

type StyleValue = number | string | RNStyle

function getStyleValue(
  themeMapping: any,
  transform: ((cssValue: any) => StyleValue) | undefined,
  propValueFinal: any,
  userValue = propValueFinal,
) {
  let value: StyleValue | undefined

  if (isFunction(themeMapping)) {
    value = themeMapping(propValueFinal)
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] ?? userValue
  } else {
    value = get(themeMapping, propValueFinal, userValue)
  }

  if (transform != null) {
    value = transform(value)
  }

  return value
}

interface StyleOptions<PropKey> {
  styleProp?: PropKey | keyof RNStyle | (PropKey | keyof RNStyle)[] | false
  prop: PropKey
  themeKey?: keyof Theme["sys"] | "spacing"
  transform?: (cssValue: any) => StyleValue
}

export function style<PropKey extends string>({
  prop,
  styleProp = prop,
  themeKey,
  transform,
}: StyleOptions<PropKey>) {
  const fn = (props: Record<string, any>) => {
    if (props[prop] == null) {
      return null
    }

    const propValue = props[prop]
    const { theme } = props

    const themeMapping =
      themeKey === "spacing"
        ? theme.spacing
        : get(theme.sys, themeKey ?? "", {})

    const styleFromPropValue = (propValueFinal?: StyleValue) => {
      const value = getStyleValue(themeMapping, transform, propValueFinal)

      // if (propValueFinal === value && typeof propValueFinal === "string") {
      //   // Haven't found value
      //   value = getValue(
      //     themeMapping,
      //     transform,
      //     `${prop}${
      //       propValueFinal === "default" ? "" : capitalize(propValueFinal)
      //     }`,
      //     propValueFinal,
      //   )
      // }

      return styleProp === false
        ? (value as RNStyle)
        : Array.isArray(styleProp)
        ? Object.fromEntries(styleProp.map((key) => [key, value]))
        : { [styleProp]: value }
    }

    return handleBreakpoints(props, propValue, styleFromPropValue)
  }

  fn.filterProps = [prop]

  return fn
}

export function compose<Props extends Record<string, any>>(
  ...styles: { (props: any): any; filterProps: (keyof Props)[] }[]
) {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handlers = styles.reduce<any>((acc, style) => {
    for (const prop of style.filterProps) {
      acc[prop] = style
    }
    return acc
  }, {})

  const fn = (props: any) =>
    Object.keys(props).reduce<any>((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props))
      }
      return acc
    }, {})

  fn.filterProps = styles.reduce<(keyof Props)[]>(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (acc, style) => acc.concat(style.filterProps),
    [],
  )

  return fn
}
