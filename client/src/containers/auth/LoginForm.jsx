import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import auth, { changeField, initializeForm } from '../../modules/auth'
import LoginAuthForm from '../../componets/auth/LoginAuthForm'
import { login } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const form  = useSelector(state =>  state.authForm.login)
    const {token, loading, error} = useSelector(state => state.auth)

    const onChange = e => {
        const { name, value } = e.target
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    }

    const onSubmit = e => {
        e.preventDefault()
        const {userId, password} = form
        dispatch(
            login({
                userId, password
            })
        )
    }

    useEffect(() => {
        dispatch(initializeForm('login'))
    }, [dispatch])

    useEffect(() => {
        if(token) {
            navigate('/', {replace: true})
        }
    }, [token, navigate])

    return (
        <LoginAuthForm 
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            loading={loading}
            error={error}
            />

    )
}
//수정해야함
export default LoginForm