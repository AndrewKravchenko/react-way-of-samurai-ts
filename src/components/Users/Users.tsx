import React from "react"
import styles from "./users.module.css"
import {UsersType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: UsersType[],
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://citaty.info/files/characters/83534.jpg",
                    followed: false,
                    fullName: "Dima",
                    status: "I'm a big boss",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: "https://citaty.info/files/characters/83534.jpg",
                    followed: true,
                    fullName: "Sasha",
                    status: "I'm a bigger boss",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 3,
                    photoUrl: "https://citaty.info/files/characters/83534.jpg",
                    followed: false,
                    fullName: "Andrew",
                    status: "I'm a biggest boss",
                    location: {city: "Kiev", country: "Ukraine"}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}