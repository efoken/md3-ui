import * as Md3Core from "@md3-ui/core"
import { Link, Text } from "@md3-ui/core"
import * as React from "react"
import { CodeBlock } from "./components/code-block"

export const MDXComponents = {
  h1: ({ color, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h1" variant="display-large" {...props} />
  ),
  h2: ({ color, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h2" variant="display-medium" {...props} />
  ),
  h3: ({ color, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h3" variant="display-small" {...props} />
  ),
  h4: ({ color, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h4" variant="headline-large" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <Link as="a" {...props} />
  ),
  p: ({ color, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" variant="body-large" {...props} />
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) =>
    typeof children === "string" ? (
      <pre {...props}>{children}</pre>
    ) : (
      <CodeBlock {...props}>
        {React.Children.only(children) as React.ReactElement}
      </CodeBlock>
    ),
  ...Md3Core,
}
