import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByTitle, sortByDate } from '../actions/filters'

const InterlinearListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if(e.target.value === 'title') {
                    props.dispatch(sortByTitle())
                } else if (e.target.value === 'date') {
                    props.dispatch(sortByDate())
                }
            }}
        >
            <option value="title">Title</option>
            <option value="date">Date</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(InterlinearListFilters)
