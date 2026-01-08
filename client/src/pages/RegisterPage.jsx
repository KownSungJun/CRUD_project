import AuthTemplate from '../componets/auth/AuthTemplate';
// import AuthForm from "../componets/auth/AuthForm"
import RegisterForm from '../componets/auth/RegisterForm';
const RegisterPage = () => {
  return (
    <>
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </>
  );
};

export default RegisterPage;
