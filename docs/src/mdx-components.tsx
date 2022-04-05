import * as MD3Core from "@md3-ui/core"
import { Link, Text } from "@md3-ui/core"

export const MDXComponents = {
  a: (props: any) => <Link as="a" {...props} />,
  p: (props: any) => <Text as="p" variant="body-medium" {...props} />,
  ...MD3Core,
}
