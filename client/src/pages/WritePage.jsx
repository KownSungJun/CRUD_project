import Editor from "../componets/write/Editor"
import Responsive from "../componets/common/Responsive"
import TagBox from "../componets/write/TagBox"
import WriteActionButtons from "../componets/write/WriteActionButton"
import { useState } from "react"

const WritePage = ({onSuccess}) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (!res.ok) {
      alert("글 작성 실패");
      return;
    }

    setTitle("");
    setContent("");

    onSuccess(); 
  };
    return <>
        <Responsive>
            <Editor />
            <TagBox />
            <WriteActionButtons />
        </Responsive>
    </>
}

export default WritePage