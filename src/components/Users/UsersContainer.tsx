import {connect} from "react-redux";
import {AppStateType} from "../../State/ReduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersPageType,
    UsersType
} from "../../State/UsersPageReducer";
import {UsersAPIContainer} from './UsersAPIContainer';

type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUserCount:number) => void
}

export type usersType = mapDispatchToPropsType & usersPageType

const mapStateToProps = (state: AppStateType): usersPageType => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage

    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUserCount:number) => {
            dispatch(setTotalUsersCountAC(totalUserCount))
        },
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);