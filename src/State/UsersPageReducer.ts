import {ActionTypes} from './ReduxStore';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UsersType = {
    id: string,
    photoUrl:string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}

const initialState = {
    users: [] as Array<UsersType>
}

export type usersPageType = typeof initialState

export const UsersPageReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:state.users.map((u)=>{
                    if(u.id===action.userID) {
                        return {...u, followed: true}
                    }
                    return u;})
                }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map((u)=>{
                    if(u.id===action.userID) {
                        return {...u, followed: false}
                    }
                    return u;})
            }
        case SET_USERS:
            return{...state, users:[...state.users,...action.users]

            }
        default:
            return state

    }
}

export type FollowType = ReturnType<typeof followAC>
export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}
export type UnfollowType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}
export type SetUsersType=ReturnType<typeof setUsersAC>
export const setUsersAC=(users:Array<UsersType>)=>{
    return {
        type: SET_USERS,
        users: users
    } as const
}