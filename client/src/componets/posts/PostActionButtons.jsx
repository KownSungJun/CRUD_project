import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useState, useCallback } from 'react';
import AskPostRemoveModal from './AskPostRemoveModal'
import AskModal from '../common/AskModal';
const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false)
  const onRemoveClick = () => {
    setModal(true)
  }
  const onCancel = () => {
    setModal(false)
  }
  const onConfirm = () => {
    setModal(false)
    onRemove()
  } //만약 계정을 삭제할 경우 만약 글을 쓴게 있다면 그 글은 어떻게 할 것인가?
  return (
    <>
    <PostActionButtonsBlock>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
    </PostActionButtonsBlock>
    <AskPostRemoveModal 
      visible={modal}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
    </>

  );
};

export default PostActionButtons;
