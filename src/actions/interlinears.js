import { v4 as uuidv4 } from 'uuid'

export const addInterlinear = (
    {
        title = '',
        createdAt = 0,
        lines = []
    } = {}
) => (
    {
        type: 'ADD_INTERLINEAR',
        interlinear: {
            id: uuidv4(),
            title,
            createdAt,
            lines
        }
    }
)

export const removeInterlinear = ({ id } = {}) => {
    // console.log("removeInterlinear", id)
    return {
        type: 'REMOVE_INTERLINEAR',
        id
    }
}

export const editInterlinear = (id, updates) => (
    {
        type: 'EDIT_INTERLINEAR',
        id,
        updates
    }
)
