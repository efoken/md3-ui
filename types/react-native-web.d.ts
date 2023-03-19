declare module "react-native-web" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export function unstable_createElement(type: string, props: any): any
}

declare module "react-native-web/dist/exports/StyleSheet/compiler/createReactDOMStyle" {
  export default function createReactDOMStyle(
    style: Record<string, any>,
  ): Record<string, any>
}

declare module "react-native-web/dist/modules/prefixStyles" {
  export default function prefixStyles(
    style: Record<string, any>,
  ): Record<string, any>
}

declare module "react-native-web/dist/vendor/hash" {
  export default function hash(str: string): string
}
