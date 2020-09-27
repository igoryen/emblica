import React from 'react'
import { connect } from 'react-redux'
import InterlinearListItem from './InterlinearListItem'

const InterlinearList = (props) => (
    <div>
        <h1>List of Interlinears</h1>
        {
            props.interlinears.map((interlinear) => {
                return <InterlinearListItem key={interlinear.id} {...interlinear} />
            })
        }
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
