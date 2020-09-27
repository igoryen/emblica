import React from 'react'
import InterlinearForm from './InterlinearForm'
import { connect } from 'react-redux'


export class ViewText extends React.Component {
    render() {
        return (
            <div>
                <pre>Viewing the text {this.props.match.params.id}</pre>
                <InterlinearForm interlinear={this.props.interlinear} />
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

export default connect(mapStateToProps)(ViewText)
