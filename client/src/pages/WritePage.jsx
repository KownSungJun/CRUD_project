import Editor from "../componets/write/Editor"
import Responsive from "../componets/common/Responsive"
import TagBox from "../componets/write/TagBox"
import WriteActionButtons from "../componets/write/WriteActionButton"
import { useState } from "react"
import { writePost } from "../api/posts"
import { useNavigate } from "react-router-dom"

const TEMP_AUTHOR_ID = "temp-user-001";

const WritePage = ({onSuccess}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

  const onPublish = async () => {
    if (!title || !content) {
      alert('제목과 내용을 입력하세요');
      return;
    }

    try {
      setLoading(true);

      const res = await writePost({
        title,
        content, 
        authorId: TEMP_AUTHOR_ID,
      });

      navigate(`/posts/${res.data._id}`);
    onSuccess?.();
    } catch (e) {
      console.error(e);
      alert('게시글 작성 실패');
    } finally {
      setLoading(false);
    }
  };
    return <>
        <Responsive>
            <Editor 
              title={title}
              content={content}
              
              onChangeTitle={setTitle}
              onChangeContent={setContent}/>
            <TagBox />
            <WriteActionButtons 
              onPublish={onPublish}
              loading={loading}/>
        </Responsive>
    </>
}

export default WritePage