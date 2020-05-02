export const searchData = (input) => {
  return (dispatch) => {
    dispatch({ type: 'SEARCH', payload: input })
  }
}

export const toggleSidebar = () => {
  return (dispatch) => {
    dispatch({ type: 'TOGGLE' })
  }
}