import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = (props) => (
    <div>
        <h3>404! <Link to="/">Go home</Link></h3>
    </div>
)

export default NotFoundPage
