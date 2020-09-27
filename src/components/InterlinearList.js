import React from 'react'
import { connect } from 'react-redux'

const InterlinearList = (props) => (
    <div>
        <h1>List of Interlinears</h1>
        {props.filters.text} | {props.interlinears.length}
    </div>
)

const mapStateToProps = (state) => {
    return {
        interlinears: state.interlinears,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(InterlinearList)
