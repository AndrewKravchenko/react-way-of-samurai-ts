import React from 'react';
import cl from './MyPosts.module.css';
import {Post, PostPropsType} from './Post/Post';

export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    addPost: ()=> void
    updateNewPostText: (text: string)=> void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : "";
        props.updateNewPostText(text)
    }

    return <div className={cl.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={cl.posts}>
            {postsElements}
        </div>
    </div>
}

