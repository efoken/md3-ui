import { Theme } from "@md3-ui/theme"
import { capitalize, get } from "@md3-ui/utils"
import { handleBreakpoints } from "./system/breakpoints"
import { AllStyle } from "./types"
import { merge } from "./utils"

type StyleValue = number | string | AllStyle

function getValue(
  themeMapping: any,
  transform: ((cssValue: any) => StyleValue) | undefined,
  propValueFinal: any,
  userValue = propValueFinal,
) {
  let value: StyleValue | undefined

  if (typeof themeMapping === "function") {
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

export interface StyleOptions<PropKey> {
  styleProp?: PropKey | keyof AllStyle | (PropKey | keyof AllStyle)[] | false
  prop: PropKey
  themeKey?: keyof Theme
  transform?: (cssValue: any) => StyleValue
}

export function style<PropKey extends string>(options: StyleOptions<PropKey>) {
  const { prop, styleProp = prop, themeKey, transform } = options

  const fn = ({ theme, ...props }: any) => {
    if (props[prop] == null) {
      return null
    }

    const propValue = props[prop]
    const themeMapping = get(theme, themeKey ?? "", {})

    const styleFromPropValue = (propValueFinal?: StyleValue) => {
      let value = getValue(themeMapping, transform, propValueFinal)

      if (propValueFinal === value && typeof propValueFinal === "string") {
        // Haven't found value
        value = getValue(
          themeMapping,
          transform,
          `${prop}${
            propValueFinal === "default" ? "" : capitalize(propValueFinal)
          }`,
          propValueFinal,
        )
      }

      return styleProp === false
        ? (value as AllStyle)
        : Array.isArray(styleProp)
        ? Object.fromEntries(styleProp.map((key) => [key, value]))
        : { [styleProp]: value }
    }

    return handleBreakpoints(props, propValue, styleFromPropValue)
  }

  fn.filterProps = [prop]

  return fn
}

export function compose<PropKey extends string>(
  ...styles: { (props: any): any; filterProps: PropKey[] }[]
) {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach((prop: any) => {
      acc[prop] = style
    })

    return acc
  }, {})

  const fn = (props: any) =>
    Object.keys(props).reduce<any>((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props))
      }
      return acc
    }, {})

  fn.filterProps = styles.reduce<PropKey[]>(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (acc, style) => acc.concat(style.filterProps),
    [],
  )

  return fn
}
