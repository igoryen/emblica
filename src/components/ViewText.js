import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { startRemoveInterlinear } from '../actions/interlinears'
import ReactModal from 'react-modal'

export class ViewText extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.interlinear ? props.interlinear.id : 'no id',
            title: props.interlinear ? props.interlinear.title : 'no title',
            lines: props.interlinear ? props.interlinear.lines : 'no lines',
            createdAt: props.interlinear ? moment(props.interlinear.createdAt) : moment(),
            showRemoveConfirmationModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    onRemove = () => {
        this.props.dispatch(startRemoveInterlinear({
            id: this.props.interlinear.id
        }))
        this.textIsRemoved = true
    }

    render() {
        if (this.textIsRemoved) {
            return <Redirect to='/' />
        } else {
            let idx = 0;
            const thelines = Object.entries(this.state.lines).map(line => {
                if (line[1]["main"]) {
                    return (
                        <div className="word-column" key={idx++}>
                            <div className="word-column__main">{line[1]["main"]}</div>
                            <div className="word-column__phonetic">{line[1]["phonetic"]}</div>
                            <div className="word-column__verbatim">{line[1]["verbatim"]}</div>
                        </div>
                    )
                } else {
                    return (
                        <hr key={idx++} />
                    )
                }
            })

            return (
                <div className="emblica-body">
                    <div className="text-title"><h2>{this.state.title}</h2></div>
                    <div className="lines">{thelines}</div>
                    <div className="text-controls">
                        <Link to={`/edit/${this.state.id}`}>Edit text</Link>
                        <button onClick={this.handleOpenModal}>Remove</button>
                        <ReactModal
                            appElement={document.getElementById('root')}
                            isOpen={this.state.showModal}
                            contentLabel="onRequestClose Example"
                            onRequestClose={this.handleCloseModal}
                        >
                            <div className="text-control__removal">
                                <h3>"{this.state.title}"</h3> 
                                <h2>will be removed!</h2>
                            </div>
                            <div className="text-controls__container">
                                <button onClick={this.handleCloseModal}>Abort</button>
                                <button onClick={this.onRemove}>Yes, remove the text</button>
                            </div>

                        </ReactModal>
                    </div>
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

export default connect(null, mapDispatchToProps)(ViewText)
