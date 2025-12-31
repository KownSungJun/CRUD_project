import AuthForm from "../componets/auth/AuthForm"
import AuthTemplate from "../componets/auth/AuthTemplate"

const LoginPage = ({ navigate }) => {
    return <>
        <AuthTemplate>
            <AuthForm/>
        </AuthTemplate>
    </>
}

export default LoginPage