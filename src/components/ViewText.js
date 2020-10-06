import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { startRemoveInterlinear } from '../actions/interlinears'

export class ViewText extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.interlinear ? props.interlinear.id : 'no id',
            title: props.interlinear ? props.interlinear.title : 'no title',
            lines: props.interlinear ? props.interlinear.lines : 'no lines',
            createdAt: props.interlinear ? moment(props.interlinear.createdAt) : moment(),
        }
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
                if(line[1]["main"]) {
                    return (
                        <div className="word-column" key={idx++}>
                            <div>{line[1]["phonetic"]}</div>
                            <div>{line[1]["main"]}</div>
                            <div>{line[1]["verbatim"]}</div>
                        </div>
                    )
                } else {
                    return (
                        <hr key={idx++}/>
                    )
                }
            })

            return (
                <div>
                    <pre>Hello from ViewText</pre>
                    <h1>{this.state.title}</h1>
                    <div className="lines">{thelines}</div>
                    <Link to={`/edit/${this.state.id}`}>Edit text</Link>
                    <button onClick={this.onRemove}>Remove</button>
                </div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

export default connect(null, mapDispatchToProps)(ViewText)
