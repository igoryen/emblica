import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const InterlinearListItem = ({ id, title, createdAt, lines }) => (
    <div>
        <Link to={`/view/${id}`}>
            <span>{createdAt}</span>) <span>{title}</span> : <span>{id}</span>
        </Link>
    </div>
)

export default connect()(InterlinearListItem)
