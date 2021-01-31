import React from 'react';
import cl from './Post.module.css';

export type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={cl.item}>
            <img src='https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_960_720.jpg' alt={""}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}