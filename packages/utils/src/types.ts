import { DistributiveOmit } from "@emotion/react"

export interface OverridableTypeMap {
  props: {}
  defaultAs: React.ElementType
}

/**
 * Props defined on the component.
 */
export type BaseProps<M extends OverridableTypeMap> = M["props"]

/**
 * Props of the component if `as={Component}` is used.
 */
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType
> = BaseProps<M> &
  DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>

/**
 * Props if `as={Component}` is NOT used.
 */
export type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> &
  DistributiveOmit<
    React.ComponentPropsWithRef<M["defaultAs"]>,
    keyof BaseProps<M>
  >

export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      as: C
    } & OverrideProps<M, C>
  ): JSX.Element
  (props: DefaultComponentProps<M>): JSX.Element
  propTypes?: any
}
