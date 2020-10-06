// import { v4 as uuidv4 } from 'uuid'
import database from '../firebase/firebase'

export const addInterlinear = (interlinear) => (
    {
        type: 'ADD_INTERLINEAR',
        interlinear
    }
)

export const startAddInterlinear = (interlinearData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            mainlang = '',
            title = '',
            mainauthor = '',
            lines = [],
            createdAt = 0
        } = interlinearData
        const interlinear = { mainlang, title, mainauthor, lines, createdAt }

        return database.ref(`users/${uid}/interlinears`).push(interlinear).then((ref) => {
            dispatch(addInterlinear(
                {
                    id: ref.key,
                    ...interlinear
                }
            ))
        })
    }
}

export const removeInterlinear = ({ id } = {}) => {
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

// set verb forms
export const setInterlinears = (interlinears) => (
    {
        type: 'SET_INTERLINEARS',
        interlinears
    }
)

export const startSetInterlinears = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/interlinears`).once('value').then((snapshot) => {
            const interlinears = []

            snapshot.forEach((childSnapshot) => {
                interlinears.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setInterlinears(interlinears))
        })
    }
}

export const startRemoveInterlinear = ({id} = {}) => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid
        return database
            .ref(`users/${uid}/interlinears/${id}`)
            .remove()
            .then(() => {
                dispatch(removeInterlinear({id}))
            })
    }
}

export const startEditInterlinear = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database
            .ref(`users/${uid}/interlinears/${id}`)
            .update(updates)
            .then(() =>{
                dispatch(editInterlinear(id, updates))
            })
    }
}
