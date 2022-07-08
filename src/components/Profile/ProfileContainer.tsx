import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../State/ReduxStore';
import {getUsersProfile,profilePageType} from '../../State/ProfilePageReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';


export class ProfileAPIContainer extends React.Component<profileType, profileType> {
    componentDidMount() {
        let userID=this.props.match.params.userID;
        if(!userID) {
            userID = '2';
        }
        this.props.getUsersProfile(userID);
    };

    render() {
        return <Profile {...this.props} Profile={this.props.Profile}/>
    };
}
type mapDispatchToPropsType = {
    // setUsersProfile:(profile:photosType)=>void
    getUsersProfile:(userID: string)=>void
}
type PathParamsType={
    userID:string
}
// export type profileType = mapDispatchToPropsType & profilePageType
type OwnPropsType=mapStateToProps & mapDispatchToPropsType
type profileType=RouteComponentProps<PathParamsType>&OwnPropsType
export type mapStateToProps={
    Profile:any
}

const mapStateToProps=(state: AppStateType):mapStateToProps=>{
    return{
Profile: state.ProfilePage.Profile,
    }as profilePageType
}

const WithUrlDataContainerComponent=withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {
    getUsersProfile
})(WithUrlDataContainerComponent);