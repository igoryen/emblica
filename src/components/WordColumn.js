import React from 'react'
import { connect } from 'react-redux'

const WordColumn = ({ one, two }) => (
    
    <div className="word-column">
        <div>{one}</div>
        <div>{two}</div>
    </div>
)

export default connect()(WordColumn)