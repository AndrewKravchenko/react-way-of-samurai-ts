import React from "react"
import styles from "./users.module.css"
import {UsersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png"
import axios from "axios";


type UsersPropsType = {
    users: UsersType[],
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}
type AxiosType = {
    error: null | string
    items: UsersType[]
    totalCount: number
}

export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props)

        axios.get<AxiosType>("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }

}