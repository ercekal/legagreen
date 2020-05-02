export const searchData = (input) => {
  return (dispatch) => {
    dispatch({ type: 'SEARCH', payload: input })
  }
}

export const toggle = (toggle) => {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE', payload: toggle })
  }
}