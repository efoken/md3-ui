import * as React from "react"

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
  // eslint-disable-next-line react/jsx-no-useless-fragment
}) => <>{children}</>
