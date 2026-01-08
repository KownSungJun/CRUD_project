import Editor from '../componets/write/Editor';
import Responsive from '../componets/common/Responsive';
import TagBox from '../componets/write/TagBox';
import WriteActionButtons from '../componets/write/WriteActionButton';
import { useState, useEffect } from 'react';
import { writePost } from '../api/posts';
import { useNavigate } from 'react-router-dom';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onPublish = async () => {
    if (!title || !content) {
      alert('제목과 내용을 입력하세요');
      return;
    }
    setLoading(true);
    try {
      const res = await writePost({
        title,
        content,
      });

      navigate(`/`);
    } catch (e) {
      console.error(e);
      alert('게시글 작성 실패');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Responsive>
        <Editor
          title={title}
          content={content}
          onChangeTitle={setTitle}
          onChangeContent={setContent}
        />
        <TagBox />
        <WriteActionButtons onPublish={onPublish} loading={loading} />
      </Responsive>
    </>
  );
};

export default WritePage;
