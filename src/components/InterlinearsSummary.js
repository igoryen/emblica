import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectInterlinears from '../selectors/interlinears'
import selectInterlinearsTotal from '../selectors/interlinears-total'

export const InterlinearsSummary = ({ interlinearCount, interlinearsTotal, isAuthenticated }) => {
    const interlinearWord = interlinearCount === 1 ? 'interlinear' : 'interlinears'

    return (
        <div>
            <div>
                <h4>Viewing <span>{interlinearCount}</span> {interlinearWord}</h4>
                { isAuthenticated && (
                    <div>
                        <Link to="/add">Add interlinear</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleInterlinears = selectInterlinears(state.interlinears, state.filters)
    return {
        interlinearCount: visibleInterlinears.length,
        interlinearsTotal: selectInterlinearsTotal(visibleInterlinears),
        isAuthenticated: !!state.auth.uid
    }
}

export default connect(mapStateToProps)(InterlinearsSummary)