import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const InterlinearListItem = ({ id, mainlang, mainauthor, title, createdAt,  }) => (
    <div>
        <Link to={`/view/${id}`}>
            (<span>{mainlang}</span>) - <span>{mainauthor}</span> - <span>{title}</span> - <span>{createdAt}</span> : <span>{id}</span>
        </Link>
    </div>
)

export default connect()(InterlinearListItem)
