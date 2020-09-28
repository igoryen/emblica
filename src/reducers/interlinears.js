const interlinearsReducerDefaultState = []
export default (state = interlinearsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_INTERLINEAR':
            return [
                ...state,
                action.interlinear
            ]
        case 'REMOVE_INTERLINEAR':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_INTERLINEAR':
            return state.map((interlinear) => {
                if (interlinear.id === action.id) {
                    return {
                        ...interlinear,
                        ...action.updates
                    }
                }
                else {
                    return interlinear
                }
            })
        default:
            return state
    }
}

