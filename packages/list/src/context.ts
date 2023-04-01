import * as React from "react"

export const ListItemContext = React.createContext({
  end: false,
  start: false,
})

export const ListItemProvider = ListItemContext.Provider

export function useListItemContext() {
  return React.useContext(ListItemContext)
}
