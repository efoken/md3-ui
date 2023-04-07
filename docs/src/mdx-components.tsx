import * as Md3Core from "@md3-ui/core"
import { Link, Text } from "@md3-ui/core"
import * as React from "react"
import { CodeBlock } from "./components/code-block"
import { PropsTable } from "./components/props-table"

export const MDXComponents = {
  h1: ({ color, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h1" variant="displayLarge" {...props} />
  ),
  h2: ({
    children,
    color,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h2" variant="displayMedium" {...props}>
      <a href="#" style={{ textDecoration: "none" }}>
        {children}
      </a>
    </Text>
  ),
  h3: ({
    children,
    color,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h3" variant="displaySmall" {...props}>
      <a href="#" style={{ textDecoration: "none" }}>
        {children}
      </a>
    </Text>
  ),
  h4: ({ color, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h4" variant="headlineLarge" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <Link as="a" {...props} />
  ),
  p: ({ color, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" variant="bodyLarge" {...props} />
  ),
  code: ({ color, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text
      as="code"
      variant="bodyLarge"
      sx={{ fontWeight: "700" }}
      style={{ fontFamily: "monospace" }}
      {...props}
    />
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) =>
    typeof children === "string" ? (
      <pre {...props}>{children}</pre>
    ) : (
      <CodeBlock {...props}>
        {React.Children.only(children) as React.ReactElement}
      </CodeBlock>
    ),
  PropsTable,
  ...(Md3Core as Record<string, any>),
}
