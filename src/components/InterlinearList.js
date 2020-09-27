import React from 'react'
import { connect } from 'react-redux'
import InterlinearListItem from './InterlinearListItem'
import selectInterlinears from '../selectors/interlinears'

const InterlinearList = (props) => (
    <div>
        <h1>List of Interlinears</h1>
        {
            props.interlinears.map((interlinear) => {
                return <InterlinearListItem key={interlinear.id} {...interlinear} />
            })
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        interlinears: selectInterlinears(state.interlinears, state.filters)
    }
}

export default connect(mapStateToProps)(InterlinearList)
