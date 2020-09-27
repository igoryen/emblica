import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const InterlinearListItem = ({ id, title, date }) => (
    <div>
        <Link to={`/view/${id}`}>
            <span>{date}</span>) <span>{title}</span> : <span>{id}</span>
        </Link>

    </div>
)

export default connect()(InterlinearListItem)
