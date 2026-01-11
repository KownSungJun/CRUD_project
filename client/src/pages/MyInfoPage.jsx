import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

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

  return (
    <PageBlock>
      {/* 1️⃣ 유저 프로필 영역 */}
      <ProfileBox>
        <Username>@{authorId}</Username>
        <InfoText>이 유저가 작성한 게시물과 활동을 확인할 수 있습니다.</InfoText>
      </ProfileBox>

      {/* 2️⃣ 유저 게시물 목록 */}
      <SectionTitle>작성한 글</SectionTitle>

      {/* 👉 여기서 PostListPage가 Outlet으로 렌더링됨 */}
      <Outlet />
    </PageBlock>
  );
};

export default MyInfoPage;