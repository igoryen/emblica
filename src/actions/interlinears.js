import { v4 as uuidv4 } from 'uuid'

export const addInterlinear = (
    {
        title = '',
        createdAt = 0
    } = {}
) => (
    {
        type: 'ADD_INTERLINEAR',
        interlinear: {
            id: uuidv4(),
            title,
            createdAt
        }
    }
)

export const removeInterlinear = ({ id } = {}) => (
    {
        type: 'REMOVE_INTERLINEAR',
        id
    }
)

export const editInterlinear = (id, updates) => (
    {
        type: 'EDIT_INTERLINEAR',
        id,
        updates
    }
)
