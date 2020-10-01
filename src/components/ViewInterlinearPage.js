import React from 'react'
import { connect } from 'react-redux'
import ViewText from './ViewText'

const ViewInterlinearPage = (props) => {
    return (
        <div>
            <h3>"View Interlinear" page</h3>
            <ViewText 
                interlinear={props.interlinear}
            />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        interlinear: state.interlinears.find(
            (interlinear) => interlinear.id === props.match.params.id
        )
    }
}

export default connect(mapStateToProps)(ViewInterlinearPage)