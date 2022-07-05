import {connect} from 'react-redux';
import {AppStateType} from '../../State/ReduxStore';
import {
    followSuccess, setCurrentPage,
   setIsFollowingInProgress, getUsers,
    unfollowSuccess, usersPageType,
} from '../../State/UsersPageReducer';
import {Users} from './Users';
import React from 'react';
import {Preloader} from '../common/Preloader';
// import {usersAPI} from '../../api/API';

export class UsersAPIContainer extends React.Component<usersType, usersType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    }
    render = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollowSuccess}
                    follow={this.props.followSuccess}
                    setIsFollowingInProgress={this.props.setIsFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    />
            </>
        )

    }
}

type mapDispatchToPropsType = {
    followSuccess: (userID: string) => void
    unfollowSuccess: (userID: string) => void
    setCurrentPage: (pageNumber: number) => void
    setIsFollowingInProgress: (isFetching: boolean,UserID:string) => void
    getUsers:(pageNumber:number,pageSize:number)=>void
}

export type usersType = mapDispatchToPropsType & usersPageType

const mapStateToProps = (state: AppStateType): usersPageType => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress,
    } as usersPageType
}
export const UsersContainer = connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    setIsFollowingInProgress,
    getUsers,
})(UsersAPIContainer);
