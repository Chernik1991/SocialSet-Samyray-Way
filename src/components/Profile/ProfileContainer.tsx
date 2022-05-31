import React from 'react';
import {Profile} from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';

export class ProfileAPIContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUsersProfile(response.data);
        })
    };

    render() {
        return <Profile {...this.props}/>
    };
}
export const ProfileContainer = connect(mapStateToProps, {
    setUsersProfile
})(ProfileAPIContainer);