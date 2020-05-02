const initialState = {
  searchInput: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchInput: action.payload }
    default:
      return state
  }
}

export default searchReducer