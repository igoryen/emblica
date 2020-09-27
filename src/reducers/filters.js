const filtersReducerDefaultState = {
    text: '',
    sortBy: 'title'
}

export default ( state = filtersReducerDefaultState, action ) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_TITLE':
            return {
                ...state,
                sortBy: 'title'
            }
        default:
            return state
    }
}
