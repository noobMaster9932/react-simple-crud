export default (state = { test: 'Test' }, action) => {
  switch (action.type) {
  case 'test': {
    return { ...state }
  }
  default: {
    return { ...state }
  }
  }
}
