import React from 'react';
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {Preloader} from "../common/Proloader/Preloader";
import {Header} from "./Header";
import {StateType} from "../../redux/redux-store";
import {compose} from "redux";

type HeaderContainerType = {
    // toggleIsFetching: (isFetching: boolean) => void
    // setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
    getAuthUserData: () => void
    isFetching: boolean
}
type AxiosHeaderType = {
    resultCode: number
    messages: string
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        // this.props.toggleIsFetching(true)

        // axios.get<AxiosHeaderType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        //     .then(response => {
        //         if (response.data.resultCode === 0) {
        //             this.props.toggleIsFetching(false)
        //             let {id, email, login} = response.data.data
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     })

        // authMe.get()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             this.props.toggleIsFetching(false)
        //             let {id, email, login} = data.data
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     })
        this.props.getAuthUserData()
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Header {...this.props}/>
        </>
    }
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
})
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getAuthUserData
    })
)(HeaderContainer)
// export default connect(mapStateToProps, {
//     getAuthUserData
// })(HeaderContainer);
