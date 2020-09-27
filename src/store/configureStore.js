import { createStore, combineReducers } from 'redux'
import interlinearsReducer from '../reducers/interlinears'
import filtersReducer from '../reducers/filters'

export default() => {
    const store = createStore(
        combineReducers({
            interlinears: interlinearsReducer,
            filters: filtersReducer
        })
    )

    return store
}
