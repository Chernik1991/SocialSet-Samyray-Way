import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
    ActionTypes,
    addPostAC,
    PostsDataType, updateNewPostTextAC,
} from '../../../State/State';

type MyPostsType = {
    PostsData: Array<PostsDataType>
    NewPostText: string
    dispatch:(type:ActionTypes)=>void
}



export const MyPosts = (props: MyPostsType) => {

    const onChangeHandler=(newText:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(updateNewPostTextAC(newText))
    }
        const addPostHandler = () => {
            props.dispatch(addPostAC())
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onChangeHandler}
                        value={props.NewPostText}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.PostsData.map((m) => {
                    return (
                        <Post key={m.id} message={m.massage} likesCount={m.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}
