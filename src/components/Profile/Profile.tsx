import React from 'react';
import cl from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type AxiosProfileType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export function Profile(props: AxiosProfileType) {
    return <div className={cl.profile}>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
        />
        <MyPostsContainer/>
    </div>
}






