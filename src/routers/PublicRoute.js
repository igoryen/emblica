import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Header from '../components/Header'


export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header isAuthenticated ={isAuthenticated} />
                <Component {...props} />
            </div>
        ) : (
            <div>
                <Header isAuthenticated ={isAuthenticated} />
                <Component {...props} />
            </div>
        )
    )}/>
)

const mapStateToProps = (state) => {
    return  {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(PublicRoute)