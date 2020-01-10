import { exploreTypes } from './type'

export default {
  getDataAction: data => d => {
    return d({ type: exploreTypes.getData, payload: data })
  }
}
