import AskModal from '../common/AskModal'

const AskPostRemoveModal = ({visible, onConfirm, onCancel}) => {
    return (
        <AskModal 
            visible={visible}
            title="포스트 삭제"
            description="포스트를 정말 삭제하시겠습니까?"
            confirmTest="삭제"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    )
}

export default AskPostRemoveModal