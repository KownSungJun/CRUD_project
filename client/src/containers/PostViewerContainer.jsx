import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostViewer from "../componets/posts/PostViewer";
import PostActionButtons from "../componets/posts/PostActionButtons";
import { getPost } from "../api/posts";

const PostViewerContainer = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postId } = useParams();
  useEffect(() => {
    if (!postId) return;
    const fetchPosts = async () => {
      try {
        const res = await getPost(postId);
        console.log('posts response:', res.data);
        setPost(res.data); // ← 응답 구조에 맞게
      } catch (e) {
        console.error(e);
        setError('게시글을 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [postId]);
    return (
        <PostViewer 
            post={post}
            loading={loading}
            actionButtons={<PostActionButtons />}
        />
    )
}

export default PostViewerContainer