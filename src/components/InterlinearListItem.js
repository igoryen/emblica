import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeInterlinear } from '../actions/interlinears';

const InterlinearListItem = ({ dispatch, id, title, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <span>{createdAt}</span>) <span>{title}</span> : <span>{id}</span>
        </Link>
        <button onClick={() => {
            dispatch(removeInterlinear({ id }))
        }}>Remove</button>

    </div>
)

export default connect()(InterlinearListItem)
