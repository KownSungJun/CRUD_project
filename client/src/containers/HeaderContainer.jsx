import { useSelector, useDispatch } from 'react-redux'
import Header from '../componets/common/Header'
import {logout} from '../store/authSlice'

const HeaderContainer = () => {
    // const  user  = useSelector(state => state.auth.user)
    // const dispatch = useDispatch()

    // const onLogout = () => {
    //     dispatch(logout())
    // }
    // return <Header user={user} onLogout={onLogout}/>
    return <Header />
}

export default HeaderContainer