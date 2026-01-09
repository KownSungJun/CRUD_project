import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostViewer from "../componets/posts/PostViewer";
import PostActionButtons from "../componets/posts/PostActionButtons";

const PostViewerContainer = () => {
    const {authorId, postId} = useParams()
    const dispatch = useDispatch()
    const { post, error, loading } = useSelector(({post, loading}) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
    }))
    useEffect(() => {
        dispatch(readPost(postId))
        return () => {
            dispatch(unloadPost())
        }
    }, [dispatch, postId])
    return (
        <PostViewer 
            post={post}
            loading={loading}
            error={error}
            actionButtons={<PostActionButtons />}
        />
    )
}

export default PostViewerContainer