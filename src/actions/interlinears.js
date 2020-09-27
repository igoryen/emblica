import { v4 as uuidv4 } from 'uuid'

export const addInterlinear = (
    {
        title = '',
        lines = '',
    } = {}
) => (
    {
        type: 'ADD_INTERLINEAR',
        interlinear: {
            id: uuidv4(),
            title,
            lines
        }
    }
)
