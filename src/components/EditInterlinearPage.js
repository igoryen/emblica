import React from 'react'
import { connect } from 'react-redux'
import InterlinearForm from './InterlinearForm'
import { editInterlinear } from '../actions/interlinears'

const EditInterlinearPage = (props) => {
    return (
        <div>
            <h3>Edit interlinear text</h3>
            <InterlinearForm 
                interlinear={props.interlinear}
                onSubmit={(interlinear) => {
                    props.dispatch(editInterlinear(props.interlinear.id, interlinear))
                    props.history.push('/')
                    console.log('updated', interlinear)
                }}
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

export default connect(mapStateToProps)(EditInterlinearPage)
