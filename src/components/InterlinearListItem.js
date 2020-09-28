import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeInterlinear } from '../actions/interlinears';

const InterlinearListItem = ({ dispatch, id, title, date }) => (
    <div>
        <Link to={`/view/${id}`}>
            <span>{date}</span>) <span>{title}</span> : <span>{id}</span>
        </Link>
        <button onClick={() => {
            dispatch(removeInterlinear({ id }))
        }}>Remove</button>

    </div>
)

export default connect()(InterlinearListItem)
