import * as Md3Core from "@md3-ui/core"
import { Link, Text } from "@md3-ui/core"
import { Children } from "react"
import { CodeBlock } from "./components/code-block"
import { PropsTable } from "./components/props-table"

export const MDXComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h1" variant="displayLarge" {...props} />
  ),
  h2: ({
    children,
    id,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h2" variant="displayMedium" id={id} {...props}>
      <a href={`#${id}`} style={{ textDecoration: "none" }}>
        {children}
      </a>
    </Text>
  ),
  h3: ({
    children,
    id,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h3" variant="displaySmall" id={id} {...props}>
      <a href={`#${id}`} style={{ textDecoration: "none" }}>
        {children}
      </a>
    </Text>
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h4" variant="headlineLarge" {...props} />
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    <Link as="a" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" variant="bodyLarge" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <Text as="ul" variant="bodyLarge" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <Text as="ol" variant="bodyLarge" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <Text as="li" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
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
        {Children.only(children) as React.ReactElement}
      </CodeBlock>
    ),
  PropsTable: PropsTable as any,
  ...(Md3Core as Record<string, any>),
}
