import { useRef, useEffect, use } from "react";
import Quill from "quill";
import 'quill/dist/quill.bubble.css'
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive"

const EditorBlock = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 5rem;
`

const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0%.5rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[4]};
    margin-bottom: 2rem;
    width: 100%;
`

const QuillWrapper = styled.div`
    .ql-editor {
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }

    .ql-editor .ql-blank::before {
        left: 0px;
    }
`
const Editor = ({
  title,
  content,
  onChangeTitle,
  onChangeContent,
}) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요...',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });

    const quill = quillInstance.current;

    // 🔥 핵심: Quill → React state 연결
    quill.on('text-change', () => {
      const html = quill.root.innerHTML;
      const text = quill.getText().trim();
      onChangeContent(text ? html : '');
    });

    // 수정 페이지 대비 (content 초기값)
    if (content) {
      quill.root.innerHTML = content;
    }

    return () => {
      quill.off('text-change');
    };
  }, []);

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => onChangeTitle(e.target.value)}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;