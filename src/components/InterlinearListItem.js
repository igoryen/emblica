import React from 'react'

const InterlinearListItem = ({id, title}) => (
    <div>
        <span>{title}</span> : <span>{id}</span>
    </div>
)

export default InterlinearListItem
