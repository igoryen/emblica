import React from 'react'
import InterlinearForm from './InterlinearForm'
import { connect } from 'react-redux'
import { startAddInterlinear } from '../actions/interlinears'

export class AddInterlinearPage extends React.Component {
    onSubmit = (interlinear) => {
        this.props.startAddInterlinear(interlinear)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h3>Add your interlinear text</h3>
                <InterlinearForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddInterlinear: (interlinear) => dispatch(startAddInterlinear(interlinear))
})

export default connect(undefined, mapDispatchToProps)(AddInterlinearPage)
