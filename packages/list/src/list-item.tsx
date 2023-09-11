import { ButtonBase, ButtonBaseProps, useButtonBaseState } from "@md3-ui/button"
import {
  OwnerStateProps,
  StylesProp,
  SxProps,
  css,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { Theme } from "@md3-ui/theme"
import { memoize } from "@md3-ui/utils"
import { Children, cloneElement, forwardRef, isValidElement } from "react"
import {
  Text as RNText,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { ListItemIcon, ListItemIconProps } from "./list-item-icon"
import { ListItemImage, ListItemImageProps } from "./list-item-image"

export interface ListItemProps extends ButtonBaseProps {
  /**
   * Whether or not the element is in the selected visual state. When active,
   * tabindex is set to 0, and in some list item variants (like `ListItem`),
   * focuses the underlying item.
   * @default false
   */
  autoFocus?: boolean
  /**
   * Disables the item and makes it non-selectable and non-interactive.
   * @default false
   */
  disabled?: boolean
  /**
   * The content rendered at the end of the list item.
   */
  end?: React.ReactNode
  /**
   * The primary, headline text of the list item.
   */
  headline?: React.ReactNode
  /**
   * Modifies `supportingText` to support multiple lines.
   */
  multilineSupportingText?: boolean
  /**
   * The content rendered at the start of the list item.
   */
  start?: React.ReactNode
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: StylesProp<{
    root?: RNViewStyle
    start?: RNViewStyle
    body?: RNViewStyle
    end?: RNViewStyle
    headline?: RNTextStyle
    supportingText?: RNTextStyle
  }>
  /**
   * The one-line supporting text below the headline. Set
   * `multilineSupportingText` to `true` to support multiple lines in the
   * supporting text.
   */
  supportingText?: React.ReactNode
  /**
   * The system prop that allows defining system overrides as well as additional
   * styles.
   */
  sx?: SxProps
}

export type ListItemStyleKey = keyof NonNullable<ListItemProps["styles"]>

type ListItemOwnerState = Pick<ListItemProps, "disabled"> & {
  focused: boolean
  hovered: boolean
  pressed: boolean
  withOneLine: boolean
  withThreeLine: boolean
  withTwoLine: boolean
}

const ListItemRoot = styled(ButtonBase, {
  name: "ListItem",
  slot: "Root",
})<OwnerStateProps<ListItemOwnerState>>(({ ownerState, theme }) => ({
  ...theme.comp.list.listItem.container.elevation,
  alignItems: "center",
  backgroundColor: theme.comp.list.listItem.container.color,
  borderRadius: theme.comp.list.listItem.container.shape,
  flexDirection: "row",
  width: "100%",

  ...(ownerState.withOneLine && {
    minHeight: theme.comp.list.listItem.oneLine.container.height,
  }),

  ...(ownerState.withTwoLine && {
    minHeight: theme.comp.list.listItem.twoLine.container.height,
  }),

  ...(ownerState.withThreeLine && {
    minHeight: theme.comp.list.listItem.threeLine.container.height,
  }),
}))

const ListItemStart = styled(RNView, {
  name: "ListItem",
  slot: "Start",
})<OwnerStateProps<ListItemOwnerState>>(({ ownerState }) => ({
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,

  ...(ownerState.withThreeLine && {
    justifyContent: "flex-start",
  }),
}))

const listItemStartIconStyle = memoize(
  (theme: Theme, ownerState: ListItemOwnerState) =>
    css({
      color: theme.comp.list.listItem.leadingIcon.color,
      height: theme.comp.list.listItem.leadingIcon.size,
      marginStart: 16,
      width: theme.comp.list.listItem.leadingIcon.size,

      ...(ownerState.withThreeLine && {
        // In three line, icon must align with the mid-line of headline text
        marginTop:
          (theme.comp.list.listItem.labelText.textStyle.lineHeight! -
            theme.comp.list.listItem.leadingIcon.size) /
          2,
      }),

      ...(ownerState.hovered && {
        color: theme.comp.list.listItem.hover.leadingIcon.icon.color,
      }),

      ...(ownerState.focused && {
        color: theme.comp.list.listItem.focus.leadingIcon.icon.color,
      }),

      ...(ownerState.pressed && {
        color: theme.comp.list.listItem.pressed.leadingIcon.icon.color,
      }),

      ...(ownerState.disabled && {
        color: theme.comp.list.listItem.disabled.leadingIcon.color,
      }),
    }),
)

const listItemStartImageStyle = memoize((ownerState: ListItemOwnerState) =>
  css({
    marginStart: 16,

    ...(ownerState.withThreeLine && {
      marginVertical: 0,
    }),
  }),
)

const ListItemBody = styled(RNView, {
  name: "ListItem",
  slot: "Body",
})(() => ({
  flexGrow: 1,
  flexShrink: 1,
  justifyContent: "center",
  paddingEnd: 16,
  paddingStart: 16,
  zIndex: 1,
}))

const ListItemEnd = styled(RNView, {
  name: "ListItem",
  slot: "End",
})<OwnerStateProps<ListItemOwnerState>>(({ ownerState }) => ({
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,

  ...(ownerState.withThreeLine && {
    justifyContent: "flex-start",
  }),
}))

const listItemEndIconStyle = memoize(
  (theme: Theme, ownerState: ListItemOwnerState) =>
    css({
      color: theme.comp.list.listItem.trailingIcon.color,
      height: theme.comp.list.listItem.trailingIcon.size,
      marginEnd: 16,
      width: theme.comp.list.listItem.trailingIcon.size,

      ...(ownerState.withThreeLine && {
        // In three line, icon must align with the mid-line of headline text
        marginTop:
          (theme.comp.list.listItem.labelText.textStyle.lineHeight! -
            theme.comp.list.listItem.trailingIcon.size) /
          2,
      }),

      ...(ownerState.hovered && {
        color: theme.comp.list.listItem.hover.trailingIcon.icon.color,
      }),

      ...(ownerState.focused && {
        color: theme.comp.list.listItem.focus.trailingIcon.icon.color,
      }),

      ...(ownerState.pressed && {
        color: theme.comp.list.listItem.pressed.trailingIcon.icon.color,
      }),

      ...(ownerState.disabled && {
        color: theme.comp.list.listItem.disabled.trailingIcon.color,
      }),
    }),
)

const ListItemHeadline = styled(RNText, {
  name: "ListItem",
  slot: "Headline",
})<OwnerStateProps<ListItemOwnerState>>(({ ownerState, theme }) => ({
  ...theme.comp.list.listItem.labelText.textStyle,
  color: theme.comp.list.listItem.labelText.color,

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.list.listItem.disabled.labelText.color,
      theme.comp.list.listItem.disabled.labelText.opacity,
    ),
  }),
}))

const ListItemSupportingText = styled(RNText, {
  name: "ListItem",
  slot: "SupportingText",
})<OwnerStateProps<ListItemOwnerState>>(({ ownerState, theme }) => ({
  ...theme.comp.list.listItem.supportingText.textStyle,
  color: theme.comp.list.listItem.supportingText.color,
  width: "100%",

  ...(ownerState.disabled && {
    color: theme.utils.rgba(
      theme.comp.list.listItem.disabled.labelText.color,
      theme.comp.list.listItem.disabled.labelText.opacity,
    ),
  }),
}))

export const ListItem = forwardRef<RNView, ListItemProps>((inProps, ref) => {
  const {
    autoFocus = false,
    disabled = false,
    end: endProp,
    headline,
    multilineSupportingText = false,
    start: startProp,
    style,
    styles,
    supportingText,
    tabIndex: tabIndexProp,
    ...props
  } = useThemeProps({
    name: "ListItem",
    props: inProps,
  })

  const { focused, hovered, pressed, ...buttonBaseProps } =
    useButtonBaseState(props)

  const theme = useTheme()

  const tabIndex = disabled
    ? -1
    : autoFocus
    ? 0
    : // Do not reset anything if it's the user has set `tabIndex` manually.
      tabIndexProp ?? -1

  const ownerState = {
    disabled,
    focused,
    hovered,
    pressed,
    withOneLine: !supportingText,
    withThreeLine: !!supportingText && multilineSupportingText,
    withTwoLine: !!supportingText && !multilineSupportingText,
  }

  let start = isValidElement<any>(startProp) ? startProp : undefined

  switch (start?.type) {
    case ListItemIcon: {
      start = cloneElement<ListItemIconProps>(start, {
        style: listItemStartIconStyle(theme, ownerState),
      })
      break
    }
    case ListItemImage: {
      start = cloneElement<ListItemImageProps>(start, {
        style: listItemStartImageStyle(ownerState),
      })
      break
    }
    default: {
      start = undefined
    }
  }

  const end =
    endProp && Children.only(endProp)
      ? isValidElement<ListItemIconProps>(endProp) &&
        endProp.type === ListItemIcon
        ? cloneElement(endProp, {
            style: listItemEndIconStyle(theme, ownerState),
          })
        : undefined
      : undefined

  return (
    <ListItemRoot
      ref={ref}
      focusColor={theme.comp.list.listItem.focus.stateLayer.color}
      focusOpacity={theme.comp.list.listItem.focus.stateLayer.opacity}
      hoverColor={theme.comp.list.listItem.hover.stateLayer.color}
      hoverOpacity={theme.comp.list.listItem.hover.stateLayer.opacity}
      ownerState={ownerState}
      pressedColor={theme.comp.list.listItem.pressed.stateLayer.color}
      pressedOpacity={theme.comp.list.listItem.pressed.stateLayer.opacity}
      role="listitem"
      style={[style, styles?.root]}
      tabIndex={tabIndex}
      {...buttonBaseProps}
      {...props}
    >
      {start && (
        <ListItemStart ownerState={ownerState} style={styles?.start}>
          {start}
        </ListItemStart>
      )}
      <ListItemBody style={styles?.body}>
        <ListItemHeadline ownerState={ownerState} style={styles?.headline}>
          {headline}
        </ListItemHeadline>
        {supportingText && (
          <ListItemSupportingText
            numberOfLines={multilineSupportingText ? 2 : 1}
            ownerState={ownerState}
            style={styles?.supportingText}
          >
            {supportingText}
          </ListItemSupportingText>
        )}
      </ListItemBody>
      {end && (
        <ListItemEnd ownerState={ownerState} style={styles?.end}>
          {end}
        </ListItemEnd>
      )}
    </ListItemRoot>
  )
})

ListItem.displayName = "ListItem"
