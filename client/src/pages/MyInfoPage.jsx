import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const MyInfoPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <>
            <Outlet />
            <h1>유저 info 페이지 입니다.</h1>
        </>
    )
}

export default MyInfoPage