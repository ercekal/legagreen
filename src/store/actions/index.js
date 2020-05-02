export const searchData = (input) => {
  return (dispatch) => {
    dispatch({ type: 'SEARCH', payload: input })
  }
}