import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../State/ReduxStore';
import {getUsersProfile, photosType, profilePageType} from '../../State/ProfilePageReducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


export class ProfileAPIContainer extends React.Component<profileType, profileType> {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = '2';
        }
        this.props.getUsersProfile(userID);
    };

    render() {
        if (!this.props.isAuth) return <Redirect to={'/Login'}/>
        return <Profile {...this.props} Profile={this.props.Profile}/>
    };
}

type mapDispatchToPropsType = {
    getUsersProfile: (userID: string) => void
}
type PathParamsType = {
    userID: string
}

type profileType = RouteComponentProps<PathParamsType> & mapStateToProps & mapDispatchToPropsType
export type mapStateToProps = {
    Profile: profilePageType & photosType,
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): { isAuth: boolean; Profile: any | photosType } => {
    return {
        Profile: state.ProfilePage.Profile,
        isAuth: state.Auth.isAuth
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {
    getUsersProfile
})(WithUrlDataContainerComponent);