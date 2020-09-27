const interlinearsReducerDefaultState = []
export default ( state = interlinearsReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_INTERLINEAR':
            return [
                ...state,
                action.interlinear
            ]

        default:
            return state
    }
} 