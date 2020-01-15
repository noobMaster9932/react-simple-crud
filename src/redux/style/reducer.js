import type from './type'
const initialState = {
  fullWidth:window.innerWidth,
  fullHeight:window.innerHeight
}

export const styleReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case type.resize: {
    const { height, width } = action.payload
    return { 
      ...state,
      fullHeight:height,
      fullWidth:width
    }
  }
  default: {
    return { ...state }
  }
  }
}
  