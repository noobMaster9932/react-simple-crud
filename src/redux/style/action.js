import type from './type'
export default {
  resize:(width, height) => dispatch => dispatch({ type:type.resize, payload:{ width, height } })
}