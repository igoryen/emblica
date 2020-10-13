import React from 'react'
import InterlinearList from './InterlinearList'
import InterlinearListFilters from './InterlinearListFilters'
import { InterlinearsSummary } from './InterlinearsSummary'
import { connect } from 'react-redux'

export const Dashboard = ({isAuthenticated}) => (
    <div className="emblica-body">
        <InterlinearsSummary isAuthenticated={isAuthenticated}/>
        <InterlinearListFilters />
        <InterlinearList />
    </div>
)

const mapStateToProps = (state) => {
    return  {
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(Dashboard)
