import React from 'react';
import {Profile} from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../State/ReduxStore';
import {photosType, profilePageType, setUsersProfile} from '../../State/ProfilePageReducer';


export class ProfileAPIContainer extends React.Component<profileType, profileType> {
    componentDidMount() {
        // this.props.setIsFetching(true);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUsersProfile(response.data);
        })
    };

    render() {
        return <Profile {...this.props} Profile={this.props.Profile}/>
    };
}
type mapDispatchToPropsType = {
    setUsersProfile:(profile:photosType)=>void
}
export type profileType = mapDispatchToPropsType & profilePageType

const mapStateToProps=(state: AppStateType):profilePageType=>{
    return{
Profile: state.ProfilePage.Profile,
    }as profilePageType
}

export const ProfileContainer = connect(mapStateToProps, {
    setUsersProfile
})(ProfileAPIContainer);