import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PostViewer from '../componets/posts/PostViewer';
import PostActionButtons from '../componets/posts/PostActionButtons';
import { getPost } from '../api/posts';
import { getUser } from '../api/user';
const PostViewerContainer = () => {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();
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
  useEffect(() => {
    if (!postId) return;
    const fetchUsers = async () => {
      try {
        const res = await getUser(post.authorId);
        console.log('posts response:', res.data);
        setUser(res.data); // ← 응답 구조에 맞게
      } catch (e) {
        console.error(e);
        setError('유저정보를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  const onEdit = () => {
    navigate('/write');
  };
  const ownPost = (user && user.userId) === (post && post.authorId);

  return (
    <PostViewer
      post={post}
      loading={loading}
      actionButtons={ownPost && <PostActionButtons onEdit={onEdit} />}
    />
  );
};

export default PostViewerContainer;
