import React from 'react'
import InterlinearList from './InterlinearList'
import InterlinearListFilters from './InterlinearListFilters'
import { InterlinearsSummary } from './InterlinearsSummary'

export const Dashboard = (props) => (
    <div className="emblica-body">
        <InterlinearsSummary />
        <InterlinearListFilters />
        <InterlinearList />
    </div>
)

export default Dashboard
