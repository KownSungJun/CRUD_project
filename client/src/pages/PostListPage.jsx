import Button from "../componets/common/Button"
import { Link } from "react-router-dom"
const PostListPage = () => {
    return <>
    <Button>
        <Link to="/login">로그인</Link>
      </Button>
      <Button >
         <Link to="/register">회원가입</Link>
      </Button>
    </>
}

export default PostListPage