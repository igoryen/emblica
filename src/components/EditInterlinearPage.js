import React from 'react'
import { connect } from 'react-redux'
import InterlinearForm from './InterlinearForm'
import { startEditInterlinear, startRemoveInterlinear } from '../actions/interlinears'

export class EditInterlinearPage extends React.Component {

    onSubmit = (interlinear) => {
        this.props.startEditInterlinear(this.props.interlinear.id, interlinear)
        this.props.history.push('/')
        // console.log('updated', interlinear)
    }

    onRemove = () => {
        this.props.startRemoveInterlinear({ id: this.props.interlinear.id })
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h3>Edit interlinear text</h3>
                <InterlinearForm
                    interlinear={this.props.interlinear}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        interlinear: state.interlinears.find(
            (interlinear) => interlinear.id === props.match.params.id
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditInterlinear: (id, interlinear) => dispatch(startEditInterlinear(id, interlinear)),
    startRemoveInterlinear: (data) => dispatch(startRemoveInterlinear(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditInterlinearPage)
