import {ActionTypes} from './ReduxStore';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE='SET-CURRENT-PAGE'
const SET_TOTAL_USER_COUNT='SET-TOTAL-USER-COUNT'
const TOGGLE_IS_FETCHING='TOGGLE-IS-FETCHING'

export type UsersType = {
    id: string,
    name: string,
    status: string,
    photos:{
        small:string,
        large:string
    },
    followed: boolean,

    // location: {
    //     city: string,
    //     country: string
    // }
}

const initialState = {
    users: [] as Array<UsersType>,
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true
}

export type usersPageType = typeof initialState

export const UsersPageReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:state.users.map((u)=>{
                    if(u.id===action.userID) {
                        return {...u, followed: false}
                    }
                    return u;})
                }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map((u)=>{
                    if(u.id===action.userID) {
                        return {...u, followed: true}
                    }
                    return u;})
            }
        case SET_USERS:
            return{...state, users:action.users}
        case SET_CURRENT_PAGE:
            return{...state, currentPage:action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return{...state, totalUsersCount:action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return{...state, isFetching:action.isFetching}
                default:
            return state

    }
}

export type FollowType = ReturnType<typeof follow>
export const follow = (userID: string) => {
    return {
        type: FOLLOW,
        userID: userID
    } as const
}
export type UnfollowType = ReturnType<typeof unfollow>
export const unfollow = (userID: string) => {
    return {
        type: UNFOLLOW,
        userID: userID
    } as const
}
export type SetUsersType=ReturnType<typeof setUsers>
export const setUsers=(users:Array<UsersType>)=>{
    return {
        type: SET_USERS,
        users: users
    } as const
}
export type SetCurrentPageType=ReturnType<typeof setCurrentPage>
export const setCurrentPage=(currentPage:number)=>{
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    } as const
}
export type SetTotalUsersCount=ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount=(totalUsersCount:number)=>{
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsersCount: totalUsersCount
    } as const
}
export type SetIsFetching=ReturnType<typeof setIsFetching>
export const setIsFetching=(isFetching:boolean)=>{
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    } as const
}