import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AuthStateType, setAuthUserData} from '../../State/Auth-Reducer';
import {AppStateType} from '../../State/ReduxStore';
import {headerAPI} from '../../api/API';


export class HeaderAPIContainer extends React.Component<HeaderContainerType, HeaderContainerType> {
    componentDidMount() {

        headerAPI.getAuth().then(data=>{
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
        // axios.default.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(response => {
        //     if (response.data.resultCode === 0) {
        //         let {id, email, login} = response.data.data
        //         this.props.setAuthUserData(id, email, login)
        //     }
        // })
    };

    render() {
        return <Header {...this.props}/>
    };
}
type mapDispatchToPropsType = {
    setAuthUserData: (userId:number, email:string, login:string) => void
}

export type HeaderContainerType = mapDispatchToPropsType & AuthStateType

const mapStateToProps = (state: AppStateType): AuthStateType => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login,
    } as AuthStateType
}
export const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData
})(HeaderAPIContainer);