import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import React, { useState } from 'react';
import { register } from '../../api/auth';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState([]);

  const { userId, userName, password, passwordConfirm } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // Register API 호출 전에 데이터 형식 검증
    if (userId.length < 1 || userId.length > 20) {
      alert('아이디는 1자 이상 20자 이하이어야 합니다.');
      return;
    }

    if (password.length < 6) {
      alert('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }
    if (!userId || !userName || !password || !passwordConfirm) {
      alert('모든 항목을 입력하세요');
      return;
    }

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    console.log('Sending payload to server:', JSON.stringify(form));
    try {
      const res = await register({ userId, userName, password });
      alert('회원가입 성공!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || '회원가입 실패');
    }
  };
  return (
    <>
      <AuthFormBlock>
        <h3>회원가입</h3>
        <form onSubmit={onSubmit}>
          <StyledInput
            autoComplete="username"
            name="userId"
            placeholder="아이디"
            value={userId}
            onChange={onChange}
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={onChange}
          />

          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            value={passwordConfirm}
            onChange={onChange}
          />
          <StyledInput
            autoComplete="nickname"
            name="userName"
            placeholder="닉네임"
            value={userName}
            onChange={onChange}
          />
          <ButtonWithMarginTop cyan fullWidth type="submit">
            회원가입
          </ButtonWithMarginTop>
        </form>
        <Footer>
          <Link to="/login">로그인</Link>
        </Footer>
      </AuthFormBlock>
    </>
  );
};

export default RegisterForm;
