import { exploreTypes } from './type'

const initialState = {
  dataStates: {
    filter: null,
    sort: null
  },
  isLoading: true,
  dataGrid: []
}
export const exploreReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case exploreTypes.getData: {
    const { dataStates, dataGrid } = action.payload
    return {
      ...state,
      dataStates,
      dataGrid,
      isLoading: false
    }
  }
  default: {
    return {
      ...state
    }
  }
  }
}
