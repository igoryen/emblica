import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import moment from 'moment'

const InterlinearListItem = ({ id, mainlang, mainauthor, title, createdAt, uid, activeUser }) => (
    <div className="list-item">
        <span className="list-item__lang-main">{mainlang}</span>
        <Link to={`/view/${id}`}>
            <span className="list-item__link">{title}</span>
        </Link>
        <span className="list-item__author">{mainauthor}</span>
        {(activeUser === uid) && <span>(you)</span>}
        <span className="list-item__date">{moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
    </div>
)

const mapStateToProps = (state) => {
    return {
        activeUser: state.auth.uid
    }
}

export default connect(mapStateToProps)(InterlinearListItem)
