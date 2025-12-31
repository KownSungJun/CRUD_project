import AuthTemplate from "../componets/auth/AuthTemplate"
import AuthForm from "../componets/auth/AuthForm"
const RegisterPage = () => {
    return <>
        <AuthTemplate>
            회원가입
            <AuthForm/>
        </AuthTemplate>
    </>
}

export default RegisterPage