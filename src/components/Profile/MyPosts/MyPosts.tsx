import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActiondTypes, PostsDataType} from '../../../State/State';

type MyPoststype = {
    PostsData: Array<PostsDataType>
    NewPostText: string
    dispatch:(type:ActiondTypes)=>void
}

export const MyPosts = (props: MyPoststype) => {

    const onChangeHandler=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch({type:'UPDATE-NEW-POST-TEXT',
            newText:event.currentTarget.value})
    }
        const addPostHandler = () => {
            props.dispatch({type:'ADD-POST'})
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
