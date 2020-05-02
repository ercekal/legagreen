const initialState = {
  searchInput: '',
  openToggle: false
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchInput: action.payload }
    case 'TOGGLE':
      return { ...state, openToggle: !state.openToggle }
    default:
      return state
  }
}

export default searchReducer