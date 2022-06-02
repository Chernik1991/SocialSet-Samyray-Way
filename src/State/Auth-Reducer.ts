import {ActionTypes} from './ReduxStore';

const SET_USER_DATA = 'SET_USER_DATA'


// export type UsersType = {
//     id: string,
//     name: string,
//     status: string,
//     photos: {
//         small: string,
//         large: string
//     },
//     followed: boolean,
// }

const initialState = {
    userId: null,
    email: null,
    login: null,
}

export type AuthStateType = typeof initialState

export const UsersPageReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state

    }
}

export type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (userId:number, email:string, login:string) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}

    } as const
}
