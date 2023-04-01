/**
 * Do not edit directly
 * Generated on Wed, 29 Mar 2023 09:38:35 GMT
 */

import { mergeDeep } from "@md3-ui/utils"

export interface State {
  dragged: { stateLayerOpacity: number }
  focus: { stateLayerOpacity: number }
  hover: { stateLayerOpacity: number }
  pressed: { stateLayerOpacity: number }
}

export function createState(state?: Partial<State>) {
  return mergeDeep(
    {
      dragged: {
        stateLayerOpacity: 0.16,
      },
      focus: {
        stateLayerOpacity: 0.12,
      },
      hover: {
        stateLayerOpacity: 0.08,
      },
      pressed: {
        stateLayerOpacity: 0.12,
      },
    },
    state,
  )
}
