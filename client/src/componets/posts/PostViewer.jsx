import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  return (
    <>
      <PostViewerBlock>
        <PostHead>
          <h1>{post.title}</h1>
          <SubInfo username={post.authorId} publishedDate={new Date(post.createdAt)} />

          <Tags>
            <div className="tag">#태그1</div>
            <div className="tag">#태그2</div>
            <div className="tag">#태그3</div>
          </Tags>
        </PostHead>
        {actionButtons}
        <PostContent dangerouslySetInnerHTML={{ __html: `${post.content}` }} />
      </PostViewerBlock>
    </>
  );
};

export default PostViewer;
