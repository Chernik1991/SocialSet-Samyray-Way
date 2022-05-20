import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsDataType} from '../../../State/ProfilePageReducer';

type MyPostsType = {
    PostsData: Array<PostsDataType>
    NewPostText: string
    updateNewPostText: (newText:ChangeEvent<HTMLTextAreaElement>) => void
    addPost:()=>void
}

export const MyPosts = (props: MyPostsType) => {

    const onChangeHandler = (newText: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(newText);
    }
    const addPostHandler = () => {
        props.addPost();
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
