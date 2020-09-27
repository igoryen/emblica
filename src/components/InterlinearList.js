import React from 'react'
import { connect } from 'react-redux'

const InterlinearList = (props) => (
    <div>
        <h1>List of Interlinears</h1>
        {props.name}
    </div>
)

const ConnectedInterlinearList = connect((state) => {
    return {
        name: 'Igor'
    }
})(InterlinearList)

export default ConnectedInterlinearList
