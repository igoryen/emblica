import React from 'react'
import InterlinearForm from './InterlinearForm'
import { connect } from 'react-redux'
import { addInterlinear } from '../actions/interlinears'

const AddInterlinearPage = (props) => {
    return (
        <div>
            <h3>Add your interlinear text</h3>
            <InterlinearForm 
                onSubmit={(interlinear) => {
                    props.dispatch(addInterlinear(interlinear))
                    props.history.push('/')
                }}
            />
        </div>
    )
}

export default connect()(AddInterlinearPage)
