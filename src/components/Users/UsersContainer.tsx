import React from 'react'
import {Users} from "./Users";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UsersStateReducerType,
    UsersType
} from "../../redux/users-reducer";
import {StateType} from "../../redux/redux-store";
import {Preloader} from "../common/Proloader/Preloader";

type UsersContainerType = {
    users: UsersType[],
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: UsersType[]) => void
    // setTotalUsersCount: (totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    // toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}
export type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type AxiosUsersType = {
    error: null | string
    items: UsersType[]
    totalCount: number
}

export class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: StateType): UsersStateReducerType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// let mapDispatchToProps = (dispatch: Dispatch<ActionUsersType>) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect<UsersStateReducerType, MapDispatchType, {}, StateType>(mapStateToProps,
    {
        follow, unfollow, getUsers
    })(UsersContainer)