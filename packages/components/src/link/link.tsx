import {
  OverridableComponent,
  OverrideProps,
  StylesProp,
  SxProps,
  Text,
  styled,
  useThemeProps,
} from "@md3-ui/system"
import { forwardRef } from "react"
import { Text as RNText, TextStyle as RNTextStyle } from "react-native"

export interface LinkTypeMap<
  P = {},
  C extends React.ElementType = typeof RNText,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: StylesProp<{
      root?: RNTextStyle
    }>
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type LinkProps<
  C extends React.ElementType = LinkTypeMap["defaultAs"],
  P = {},
> = OverrideProps<LinkTypeMap<P, C>, C>

export type LinkStyleKey = keyof NonNullable<LinkProps["styles"]>

const LinkRoot = styled(Text, {
  name: "Link",
  slot: "Root",
})(({ theme }) => ({
  color: theme.sys.color.primary,
  textDecorationLine: "underline",

  "&:hover": {
    textDecorationLine: "none",
  },
}))

export const Link = forwardRef<RNText, LinkProps>((inProps, ref) => {
  const { children, style, styles, ...props } = useThemeProps({
    name: "Link",
    props: inProps,
  })

  return (
    <LinkRoot ref={ref} style={[style, styles?.root]} {...props}>
      {children}
    </LinkRoot>
  )
}) as OverridableComponent<LinkTypeMap>

Link.displayName = "Link"
