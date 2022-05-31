import {connect} from "react-redux";
import {AppStateType} from "../../State/ReduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersPageType,
    UsersType
} from "../../State/UsersPageReducer";
import * as axios from 'axios';
import {Users} from './Users';
import React from 'react';
import {Preloader} from '../common/Preloader';
import preloader from '../../assets/images/Gear-0.1s-224px.svg';

export class UsersAPIContainer extends React.Component<usersType, usersType> {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items);
        })
    }
    render = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <>
                {this.props.isFetching?<Preloader/>:null}
            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
    </>
        )

    }
}

type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUserCount:number) => void
    setIsFetching: (isFetching:boolean) => void
}

export type usersType = mapDispatchToPropsType & usersPageType

const mapStateToProps = (state: AppStateType): usersPageType => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching:state.UsersPage.isFetching,

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
        setIsFetching: (isFetching:boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        },
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);