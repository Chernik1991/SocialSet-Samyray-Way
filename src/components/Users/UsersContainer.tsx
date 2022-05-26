import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../State/ReduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, usersPageType, UsersType} from "../../State/UsersPageReducer";

type mapDispatchToPropsType= {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users:Array<UsersType>) => void
}

export type usersType=mapDispatchToPropsType & usersPageType

const mapStateToProps = (state: AppStateType):usersPageType => {
    return {
        users: state.UsersPage.users,
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);