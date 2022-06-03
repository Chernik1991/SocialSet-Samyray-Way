import {connect} from "react-redux";
import {AppStateType} from "../../State/ReduxStore";
import {
    follow, setCurrentPage,
    setIsFetching, setTotalUsersCount, setUsers,
    unfollow,
    usersPageType,
    UsersType
} from "../../State/UsersPageReducer";
import {Users} from './Users';
import React from 'react';
import {Preloader} from '../common/Preloader';
import {usersAPI} from '../../api/API';

export class UsersAPIContainer extends React.Component<usersType, usersType> {
    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber);
       usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items);
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
    } as usersPageType
}
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUserCount:number) => {
//             dispatch(setTotalUsersCountAC(totalUserCount))
//         },
//         setIsFetching: (isFetching:boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         },
//     }
// }


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
    })(UsersAPIContainer);