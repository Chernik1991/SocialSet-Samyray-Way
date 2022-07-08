import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AuthStateType, getAuthUserData} from '../../State/Auth-Reducer';
import {AppStateType} from '../../State/ReduxStore';


export class HeaderAPIContainer extends React.Component<HeaderContainerType, HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthUserData();
    };

    render() {
        return <Header {...this.props}/>
    };
}

type mapDispatchToPropsType = {
    getAuthUserData: () => void
}

export type HeaderContainerType = mapDispatchToPropsType & AuthStateType

const mapStateToProps = (state: AppStateType): AuthStateType => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login,
    } as AuthStateType
}
export const HeaderContainer = connect(mapStateToProps, {
    getAuthUserData
})(HeaderAPIContainer);