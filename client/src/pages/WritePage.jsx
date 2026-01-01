import Editor from "../componets/write/Editor"
import Responsive from "../componets/common/Responsive"
import TagBox from "../componets/write/TagBox"
import WriteActionButtons from "../componets/write/WriteActionButton"

const WritePage = () => {
    return <>
        <Responsive>
            <Editor />
            <TagBox />
            <WriteActionButtons />
        </Responsive>
    </>
}

export default WritePage