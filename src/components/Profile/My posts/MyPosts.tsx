import React from 'react';
import cl from './MyPosts.module.css';
import {Post, PostPropsType} from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

export type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (newPostText: string) => void
}

export type FormDataType = {
    newPostText: string
}
export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }


    return <div className={cl.postsBlock}>
        <h3>My posts</h3>
        <div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
        </div>
        <div className={cl.posts}>
            {postsElements}
        </div>
    </div>
}

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea} name="newPostText" placeholder="Enter your post"
                   validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)
