import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type MapStatePropsType = {
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)