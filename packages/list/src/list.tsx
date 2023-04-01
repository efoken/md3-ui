import { useEventCallback } from "@md3-ui/hooks"
import {
  OverridableComponent,
  OverrideProps,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__, createChainedFunction } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"
import { ListItem, ListItemProps } from "./list-item"

export interface ListTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
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
      root?: RNViewStyle
    }>
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type ListProps<
  C extends React.ElementType = ListTypeMap["defaultAs"],
  P = {},
> = OverrideProps<ListTypeMap<P, C>, C>

export type ListStyleKey = keyof NonNullable<ListProps["styles"]>

const ListRoot = styled(RNView, {
  name: "List",
  slot: "Root",
})(({ theme }) => ({
  backgroundColor: theme.comp.list.listItem.container.color,
  minWidth: 300,
  paddingVertical: 8,
  width: "100%",
}))

function getFirstFocusableItem<T extends React.ReactElement<ListItemProps>>(
  items: T[],
) {
  for (const [i, item] of items.entries()) {
    if (!item.props.disabled) {
      return i
    }
  }
}

function getLastFocusableItem<T extends React.ReactElement<ListItemProps>>(
  items: T[],
) {
  for (let i = items.length - 1; i >= 0; i -= 1) {
    const item = items[i]
    if (!item.props.disabled) {
      return i
    }
  }
}

function getFocusedItem<T extends React.ReactElement<ListItemProps>>(
  items: T[],
) {
  for (const [i, item] of items.entries()) {
    if (item.props.autoFocus) {
      return i
    }
  }
}

function getNextItem<T extends React.ReactElement<ListItemProps>>(
  items: T[],
  index: number,
) {
  for (let i = 1; i < items.length; i += 1) {
    const nextIndex = (i + index) % items.length
    const item = items[nextIndex]
    if (!item.props.disabled) {
      return nextIndex
    }
  }
}

function getPrevItem<T extends React.ReactElement<ListItemProps>>(
  items: T[],
  index: number,
) {
  for (let i = 1; i < items.length; i += 1) {
    const prevIndex = (index - i + items.length) % items.length
    const item = items[prevIndex]
    if (!item.props.disabled) {
      return prevIndex
    }
  }
}

export const List = React.forwardRef<RNView, ListProps>((inProps, ref) => {
  const { children, onKeyDown, style, styles, ...props } = useThemeProps({
    name: "List",
    props: inProps,
  })

  const items = React.Children.toArray(children).filter(
    (item): item is React.ReactElement<ListItemProps> =>
      React.isValidElement(item) && item.type === ListItem,
  )

  const [focusedItem, setFocusedItem] = React.useState(getFocusedItem(items))

  const handleKeyDown = useEventCallback(
    (event: React.KeyboardEvent<Element>) => {
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        return
      }

      if (items.length === 0) {
        return
      }

      event.preventDefault()

      switch (event.key) {
        // Activate the next item
        case "ArrowDown": {
          if (focusedItem != null) {
            const next = getNextItem(items, focusedItem)
            if (next != null) {
              setFocusedItem(next)
            }
          } else {
            const firstItem = getFirstFocusableItem(items)
            if (firstItem != null) {
              setFocusedItem(firstItem)
            }
          }
          break
        }
        // Activate the previous item
        case "ArrowUp": {
          if (focusedItem != null) {
            const prev = getPrevItem(items, focusedItem)
            if (prev != null) {
              setFocusedItem(prev)
            }
          } else {
            const lastItem = getLastFocusableItem(items)
            if (lastItem != null) {
              setFocusedItem(lastItem)
            }
          }
          break
        }
        // Activate the first item
        case "Home": {
          const firstItem = getFirstFocusableItem(items)
          if (firstItem != null) {
            setFocusedItem(firstItem)
          }
          break
        }
        // Activate the last item
        case "End": {
          const lastItem = getLastFocusableItem(items)
          if (lastItem != null) {
            setFocusedItem(lastItem)
          }
          break
        }
        default: {
          break
        }
      }
    },
  )

  return (
    <ListRoot
      ref={ref}
      role="list"
      style={[style, styles?.root]}
      onKeyDown={createChainedFunction(onKeyDown, handleKeyDown)}
      {...props}
    >
      {items.map((item, i) =>
        React.cloneElement(item, {
          autoFocus: focusedItem === i,
        }),
      )}
    </ListRoot>
  )
}) as OverridableComponent<ListTypeMap>

if (__DEV__) {
  List.displayName = "List"
}
