import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout, startLogin } from '../actions/auth'

export const Header = (props) => (
    <header>
        <div className={props.isAuthenticated ? "header__manned" : "header__unmanned"}>
            <Link to="/"><h3>Emblica</h3></Link>
            <div>
                {
                    props.isAuthenticated
                    ? <button onClick={props.startLogout}>Log Out</button>
                    : <button onClick={props.startLogin}>Log In</button>
                }
            </div>

        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
    startLogin: () => dispatch(startLogin())
})

const mapStateToProps = (state) => {
    return  {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
