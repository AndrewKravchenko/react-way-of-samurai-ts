import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {Preloader} from "../common/Proloader/Preloader";
import {Header} from "./Header";
import {StateType} from "../../redux/redux-store";
import {compose} from "redux";

type HeaderContainerType = {
    isFetching: boolean
}

class HeaderContainer extends React.Component<HeaderContainerType> {

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
    connect(mapStateToProps, {logout}))(HeaderContainer)
