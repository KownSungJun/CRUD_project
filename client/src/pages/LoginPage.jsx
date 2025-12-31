import AuthForm from "../componets/auth/AuthForm"
import AuthTemplate from "../componets/auth/AuthTemplate"
import LoginForm from "../containers/auth/LoginForm"
const LoginPage = () => {
    return <>
        <AuthTemplate>
            <LoginForm/>
        </AuthTemplate>
    </>
}

export default LoginPage