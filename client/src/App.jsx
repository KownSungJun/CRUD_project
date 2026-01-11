import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Route, Routes } from 'react-router-dom';
import MyInfoPage from './pages/MyInfoPage';
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
        {/* 뭔가 여기서 페이지 라우팅이 안됨 로그인 계정 마다 생기는 페이지가 연결이 안되고 있음  
        https://ko.react.dev/learn/tutorial-tic-tac-toe
        https://velog.io/@swan/React-React-Matter-js-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%88%98%EB%B0%95%EA%B2%8C%EC%9E%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-1
        https://www.youtube.com/watch?v=svZY0Kqgm-0
        https://blog.naver.com/shinequasar/223042954288
        https://velog.io/@marmin-dev/%EB%AF%B8%EC%97%B0%EC%8B%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-2-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9E%91%EC%84%B1
        https://gall.dcinside.com/mgallery/board/view/?id=thesingularity&no=760120
        https://yozm.wishket.com/magazine/detail/3539/
        https://lookappy.com/product/%EA%B8%B0%EB%AF%B8%ED%95%9C%EC%9E%94-%EC%A1%B0%EC%84%A0-%EC%82%AC%EA%B7%B9-%EB%A7%88%ED%94%BC%EC%95%84-%EB%B3%B4%EB%93%9C%EA%B2%8C%EC%9E%84/18/#none
        https://smartstore.naver.com/playmandoo/products/12367627879
        https://smartstore.naver.com/playmandoo/products/12602557777#scrollY=1200
        https://smartstore.naver.com/playmandoo/products/12710903984
        https://smartstore.naver.com/playmandoo/products/12768805120#scrollY=1200
        Users
- 유저 조회 : myInfo 마이페이지
- 유저 정보 수정, 삭제 : myInfo 마이페이지
- 회원 가입 : 회원 가입 페이지 X
Posts
- 게시글 조회 : PostViewer X
- 게시글 수정, 삭제 : PostViewer에서 연결
- 게시글 여러개 조회 : PostListPage X
- 게시글 생성 : WritePage X
Auth
- 로그인 : LoginPage X
Comments
- 댓글 생성, 조회, 수정, 삭제
        */}
        <Route path="/users/:authorId" element={<MyInfoPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
