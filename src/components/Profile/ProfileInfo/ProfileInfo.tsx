import React from 'react';
import cl from './ProfileInfo.module.css';
import {Preloader} from "../../common/Proloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileType | null
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img src='https://cdn.pixabay.com/photo/2020/09/11/00/11/field-5561687_960_720.jpg' alt={""}/>
        </div>
        <div className={cl.descriptionBlock}>
            <img src={props.profile.photos.large} alt={""}/>
            ava + description
        </div>
    </div>
}
