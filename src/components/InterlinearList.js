import React from 'react'
import { connect } from 'react-redux'

const InterlinearList = (props) => (
    <div>
        <h1>List of Interlinears</h1>
        {props.interlinears.length}
    </div>
)

const ConnectedInterlinearList = connect((state) => {
    return {
        interlinears: state.interlinears
    }
})(InterlinearList)

export default ConnectedInterlinearList
