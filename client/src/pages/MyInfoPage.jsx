import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getUser } from '../api/user';
import AuthActionButtons from '../componets/auth/AuthActionButtons';
const PageBlock = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1rem;
`;

const ProfileBox = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
`;

const Username = styled.h2`
  margin: 0;
`;

const InfoText = styled.p`
  color: #868e96;
  margin-top: 0.5rem;
`;

const SectionTitle = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const MyInfoPage = () => {
  const { authorId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!authorId) return;
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await getUser(authorId);
        console.log('user response:', res.data);
        setUser(res.data);
      } catch (e) {
        console.error(e);
        setError('유저정보를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [authorId]);
  if (loading) return <PageBlock>로딩중...</PageBlock>;
  if (error) return <PageBlock>{error}</PageBlock>;
  if (!user) return null;
  return (
    <PageBlock>
      {/* 유저 프로필 영역 */}
      <ProfileBox>
        <Username>{user.userId}</Username>
        <InfoText>가입일 : {new Date(user.createdAt).toLocaleDateString()}</InfoText>
        <InfoText>최근 정보 수정일 : {new Date(user.updatedAt).toLocaleDateString()}</InfoText>
        <InfoText>닉네임 : {user.userName}</InfoText>
        <AuthActionButtons />
      </ProfileBox>

      {/* 유저 게시물 목록 */}
      <SectionTitle>작성한 글</SectionTitle>
      <span>작성한 게시글이 없습니다.</span>
      <Outlet />
    </PageBlock>
  );
};
//이 유저가 작성한 게시물과 활동을 확인할 수 있습니다.
export default MyInfoPage;
