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
    userId: 0,
    email: '',
    login: '',
    isAuth:false
}

export type AuthStateType = typeof initialState

export const AuthReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state

    }
}

export type SetUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId:number, email:string, login:string) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    } as const
}
