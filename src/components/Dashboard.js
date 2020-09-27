import React from 'react'
import InterlinearList from './InterlinearList'
import InterlinearListFilters from './InterlinearListFilters'

export const Dashboard = (props) => (
    <div>
        <InterlinearListFilters />
        <InterlinearList />
    </div>
)

export default Dashboard
