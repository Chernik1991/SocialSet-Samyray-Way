import React from 'react';
// import {profilePageType} from './State/ProfilePageReducer';
// import {dialogsPageType} from './State/DialogsPageReducer';
// import {ActionTypes} from './State/ReduxStore';
//
// type StateType = {
//     ProfilePage: profilePageType,
//     DialogsPage: dialogsPageType
// }
//
// type storeType = {
//     _State: StateType,
//     _callSubscriber: () => void,
//     subscribe: (observer: () => void) => void,
//     getState: () => StateType,
//     dispatch: (action: ActionTypes) => void
// }
//
//
// export const StoreContext=React.createContext({} as storeType);
//
// export type ProviderType={
//     store:storeType,
//     children:React.ReactNode
// }
//
// // export const Provider=(props:ProviderType)=>{
// //     return(
// //         <StoreContext.Provider value={props.store}>
// //             {props.children}
// //         </StoreContext.Provider>
// //     )
// // }