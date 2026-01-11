import Button from '../componets/common/Button';
import { Link } from 'react-router-dom';
import PostList from '../componets/posts/PostList';
// import Header from "../componets/common/Header"
import HeaderContainer from '../containers/HeaderContainer';
import PaginationContainer from '../containers/PaginationContainer';
const PostListPage = () => {
  return (
    <>
      <PostList />
      {/* <PaginationContainer /> */}
    </>
  );
};

export default PostListPage;
