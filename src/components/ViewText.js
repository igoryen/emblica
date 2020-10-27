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
            textAuthor: props.interlinear ? props.interlinear.uid : 'n/a',
            lineMainIsHidden: false,
            linePhoneticIsHidden: false,
            lineVerbatimIsHidden: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    toggleHiddenMain(event) {
        event.target.checked ? this.setState({ lineMainIsHidden: true }) : this.setState({ lineMainIsHidden: false })
    }

    toggleHiddenPhonetic(event) {
        event.target.checked ? this.setState({ linePhoneticIsHidden: true }) : this.setState({ linePhoneticIsHidden: false })
    }

    toggleHiddenVerbatim(event) {
        event.target.checked ? this.setState({ lineVerbatimIsHidden: true }) : this.setState({ lineVerbatimIsHidden: false })
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
                    if(line[1]["phonetic"]) {
                        return (
                            <div className="word-column" key={idx++}>
                                {!this.state.lineMainIsHidden &&<div className="word-column__main">{line[1]["main"]}</div>}
                                {!this.state.linePhoneticIsHidden &&<div className="word-column__phonetic">{line[1]["phonetic"]}</div>}
                                {!this.state.lineVerbatimIsHidden &&<div className="word-column__verbatim">{line[1]["verbatim"]}</div>}
                            </div>
                        )
                    } else {
                        return (
                            <div className="word-column" key={idx++}>
                                {!this.state.lineMainIsHidden &&<div className="word-column__main">{line[1]["main"]}</div>}
                                {!this.state.lineVerbatimIsHidden &&<div className="word-column__verbatim">{line[1]["verbatim"]}</div>}
                            </div>
                        )
                    }
                } else {
                    return (
                        <hr key={idx++} />
                    )
                }
            })
            let visibilityControls
            if(this.state.lines[1]["phonetic"]) { 
                visibilityControls = (
                    <div className="line-vis-toggles">
                        <label><input type="checkbox" name="linemain" onChange={(event) => this.toggleHiddenMain(event)}/>Hide Main</label>
                        <label><input type="checkbox" name="linemain" onChange={(event) => this.toggleHiddenPhonetic(event)}/>Hide Phonetic</label>
                        <label><input type="checkbox" name="linemain" onChange={(event) => this.toggleHiddenVerbatim(event)}/>Hide Verbatim</label>
                    </div>
                )
            } else {
                visibilityControls = (
                    <div className="line-vis-toggles">
                        <label><input type="checkbox" name="linemain" onChange={(event) => this.toggleHiddenMain(event)}/>Hide Main</label>
                        <label><input type="checkbox" name="linemain" onChange={(event) => this.toggleHiddenVerbatim(event)}/>Hide Verbatim</label>
                    </div>
                )
            }

            return (
                <div className="emblica-body">
                    {visibilityControls}
                    <div className="text-title"><h2>{this.state.title}</h2></div>
                    <div className="lines">{thelines}</div>

                    { (this.props.isAuthenticated && (this.props.activeUser === this.state.textAuthor)) &&

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
                    }
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid,
        activeUser: state.auth.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewText)
