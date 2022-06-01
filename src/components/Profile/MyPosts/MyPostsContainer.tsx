import {ChangeEvent} from 'react';
import {addPost, profilePageType, updateNewPostText} from '../../../State/ProfilePageReducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../State/ReduxStore';
import {Dispatch} from 'redux';



type mapDispatchToPropsType={
    updateNewPostText: (newText: ChangeEvent<HTMLTextAreaElement>)=>void
    addPost: () =>void
}

export type MyPostsType=mapDispatchToPropsType & profilePageType

const mapStateToProps = (state: AppStateType):profilePageType => {
    return {
        PostsData: state.ProfilePage.PostsData,
        NewPostText: state.ProfilePage.NewPostText,
        Profile: state.ProfilePage.Profile,
    } as profilePageType
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        updateNewPostText: (newText) => {
            dispatch(updateNewPostText(newText));
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
