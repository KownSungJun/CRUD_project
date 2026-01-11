import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .right * {
    margin-right: 5px;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;
/**
 *
 * header 변경 및 전체 login 손 봐야함
 * token 전달이 안되고 있는듯 post할때 뭔데 token 문제 발생
 * login store, token 리덕스 손봐야함
 */
const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            CRUD
          </Link>
          {user ? (
            <div className="right">
              <UserInfo>{user.userId} </UserInfo>
              <Button to="/write">글 쓰기</Button>
              
              <Button to={`/@${user.userId}`}>글 관리</Button>
              <Button to={`/users/${user.userId}`}>내 정보</Button>
              <Button onClick={() => dispatch(logout())}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
              <Button to="/register">회원가입</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
