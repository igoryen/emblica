const filtersReducerDefaultState = {
    text: '',
    sortBy: 'title'
}

export default (state = filtersReducerDefaultState, action) => {
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
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_MAIN_LANG':
            return {
                ...state,
                sortBy: 'mainlang'
            }
        case 'SORT_BY_MAIN_AUTHOR':
            return {
                ...state,
                sortBy: 'mainauthor'
            }
        default:
            return state
    }
}
