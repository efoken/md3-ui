declare module "react-native-web/dist/exports/StyleSheet/createReactDOMStyle" {
  export default function createReactDOMStyle(
    style: Record<string, any>
  ): Record<string, any>
}

declare module "react-native-web/dist/modules/prefixStyles" {
  export default function prefixStyles(
    style: Record<string, any>
  ): Record<string, any>
}

declare module "react-native-web/dist/vendor/hash" {
  export default function hash(str: string): string
}
