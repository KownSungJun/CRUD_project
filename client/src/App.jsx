import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PostListPage from './pages/PostListPage'
import WritePage from './pages/WritePage'
import PostPage from './pages/PostPage'

export const PAGE = {
  LOGIN: "login",
  REGISTER: "register",
  POSTLIST: "postlist",
  WRITE: "write",
  POST: "post",
}
const PageMap = {
  [PAGE.LOGIN]: LoginPage,
  [PAGE.REGISTER]: RegisterPage,
  [PAGE.POSTLIST]: PostListPage,
  [PAGE.WRITE]: WritePage,
  [PAGE.PostPage]: PostPage,
}
function App() {
  const [page, setPage] = useState(PAGE.POSTLIST)

  const CurrentPage = PageMap[page]
  return (
    <>
      <CurrentPage navigate={setPage}/>
    </>
  )
}

export default App
