import { useSelector, useDispatch } from 'react-redux'
import Header from '../componets/common/Header'
import {logout} from '../store/authSlice'
//여기서 부터 시작 01-06
const HeaderContainer = () => {
    const  user  = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }
    return <Header user={user} onLogout={onLogout}/>
}

export default HeaderContainer