import { exploreTypes } from './type'

export default {
  getDataAction: data => d => {
    return d({ type: exploreTypes.getData, payload: data })
  },
  toggleAction: (status, data) => d => {
    return d({ type:exploreTypes.toggle, payload:{ status, data } })
  }
}
