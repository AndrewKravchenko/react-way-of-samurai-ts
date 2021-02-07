import React, {ComponentType} from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: StateType): MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
// export const withAuthRedirect = (Component: ComponentType<T>) => {
    const RedirectComponent = (props: MapStateToPropsForRedirectType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to="/login"/>
        return <Component {...restProps as T}/>
    }
    // class RedirectComponent extends React.Component {
    //     render() {
    //         if (!this.props.isAuth) return <Redirect to="/login"/>
    //         return <Component {...this.props}/>
    //     }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}