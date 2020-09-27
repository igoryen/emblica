import React from 'react'
import WordColumn from './WordColumn'

export default class InterlinearForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.interlinear ? props.interlinear.id : '',
            title: props.interlinear ? props.interlinear.title : '',
            date: props.interlinear ? props.interlinear.date : '',
            lines: props.interlinear ? props.interlinear.lines : []
        }
    }

    render() {
        let idx = 0
        return (
            <section>
                <h1>{this.state.title}</h1>
                <h3>{this.state.date}</h3>
                <div className="lines">{
                    this.state.lines.map((line) => {
                        return <WordColumn key={this.state.id + idx++} {...line} />
                    })
                }
                </div>
            </section>
        )
    }
}