import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByTitle, sortByDate, sortByMainLang, sortByMainAuthor } from '../actions/filters'

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
                } else if (e.target.value === 'mainlang') {
                    props.dispatch(sortByMainLang())
                }
                else if (e.target.value === 'mainauthor') {
                    props.dispatch(sortByMainAuthor())
                }
            }}
        >
            <option value="title">Title</option>
            <option value="mainauthor">Author</option>
            <option value="date">Date</option>
            <option value="mainlang">Main language</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(InterlinearListFilters)
