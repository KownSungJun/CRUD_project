import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Route, Routes } from 'react-router-dom';
import MyInfoPage from './pages/MyInfoPage'
import HeaderContainer from './containers/HeaderContainer';
const App = () => {
  return (
    <>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        {/* 뭔가 여기서 페이지 라우팅이 안됨 로그인 계정 마다 생기는 페이지가 연결이 안되고 있음  */}
        <Route path="/@:authorId" element={<MyInfoPage />}>
          <Route index element={<PostListPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
