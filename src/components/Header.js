import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = (props) => (
    <div>
        <h1>Interlinear</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/add">Add interlinear</NavLink>
    </div>
)

export default Header
