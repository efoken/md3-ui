/**
 * Do not edit directly
 * Generated on Tue, 28 Feb 2023 12:57:19 GMT
 */

import { mergeDeep } from "@md3-ui/utils"

export function createState(state: any) {
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

export type State = ReturnType<typeof createState>
