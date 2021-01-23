import React from 'react';
import {Profile} from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {StateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
