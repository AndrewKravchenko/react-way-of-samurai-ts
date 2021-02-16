import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../utils/validators/validators";
import {Input} from "../components/common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";
import {Redirect} from "react-router";
import {login} from "../redux/auth-reducer";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"}
                   name={"email"}
                   component={Input}
                   validate={[required]}
            />
        </div>
        <div>
            <Field type={"password"}
                   placeholder={"Password"}
                   name={"password"}
                   component={Input}
                   validate={[required]}
            />
        </div>
        <div>
            <Field type={"checkbox"}
                   name={"rememberMe"}
                   component={Input}
            /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)
const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)
