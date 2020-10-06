export const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
)

export const sortByTitle = () => (
    {
        type: 'SORT_BY_TITLE'
    }
)

export const sortByDate = () => (
    {
        type: 'SORT_BY_DATE'
    }
)

export const sortByMainLang = () => (
    {
        type: 'SORT_BY_MAIN_LANG'
    }
)

