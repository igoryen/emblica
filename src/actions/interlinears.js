import { v4 as uuidv4 } from 'uuid'

export const addInterlinear = (
    {
        title = '',
        lines = '',
        date = ''
    } = {}
) => (
    {
        type: 'ADD_INTERLINEAR',
        interlinear: {
            id: uuidv4(),
            title,
            lines,
            date
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
