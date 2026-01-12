import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PostViewer from '../componets/posts/PostViewer';
import PostActionButtons from '../componets/posts/PostActionButtons';
import { getPost, deletePost } from '../api/posts';

const PostViewerContainer = () => {
  const [post, setPost] = useState([]);
  const loggedInUser = useSelector(state => state.auth.user)
  const [postLoading, setPostLoading] = useState(true);
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
        setPost(res.data);
      } catch (e) {
        console.error(e);
        setError('게시글을 불러오지 못했습니다.');
      } finally {
        setPostLoading(false);
      }
    };
    fetchPosts();
  }, [postId]);


  const onEdit = () => {
    navigate('/write');
  };
  const onRemove = async () => {
    try {
      await deletePost(postId)
      navigate('/')
    } catch (e) {
      console.log(e)
      setError('유저를 삭제하지 못했습니다.')
    }
  }


  // const ownPost = (loggedInUser?.userId) === (post && post.authorId)
  const ownPost = (loggedInUser?.userId) === (post?.authorId)
  // console.log(ownPost)
  // console.log(user)
  // console.log(post && post.authorId)
  return (
    <PostViewer
      post={post}
      loading={loading}
      actionButtons={ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove}/>}
    />
  );
};

export default PostViewerContainer;
