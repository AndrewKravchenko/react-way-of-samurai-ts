import React from 'react';
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {Preloader} from "../common/Proloader/Preloader";
import {Header} from "./Header";
import {StateType} from "../../redux/redux-store";
import {compose} from "redux";

type HeaderContainerType = {
    getAuthUserData: () => void
    isFetching: boolean
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
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
