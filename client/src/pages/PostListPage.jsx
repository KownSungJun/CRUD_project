import Button from '../componets/common/Button';
import { Link } from 'react-router-dom';
import PostList from '../componets/posts/PostList';
// import Header from "../componets/common/Header"
import HeaderContainer from '../containers/HeaderContainer';
const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostList />
    </>
  );
};

export default PostListPage;
