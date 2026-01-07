import styled from "styled-components";
import Responsive from "../common/Responsive"
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { getPosts } from "../../api/posts";
import { useEffect, useState } from "react";
import * as postAPI from '../../api/posts'
const PostListBlock = styled(Responsive)`
    margin-top: 3rem;
`

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`

const PostItemBlock = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    &:first-child {
        padding-top : 0
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p {
        margin-top: 2rem;
    }
`

// const SubInto = styled.div`
//     color: ${palette.gray[6]};

//     span + span:before {
//         color: ${palette.gray[4]};
//         padding-left: 0.25rem;
//         padding-right: 0.25rem;
//         content: '\\B7';
//     }
// `

// const Tags = styled.div`
//     margin-top: 0.5rem;
//     .tag {
//         display: inline-block;
//         color: ${palatte.cyan[7]};
//         text-decoration: none;
//         margin-right: 0.rem;
//         &:hover {
//             color: ${palatte.cyan[6]};
//         }
//     }
// `

const PostItem = ({post}) => {
    return (
        <>
            <PostItemBlock>
                <h2>{post.title}</h2>
                <h3>{post.authorId}</h3>
                <SubInfo username={post.user?.username} publishedDate={new Date(post.createdAt)} />
                {post.tags && <Tags tags={posts.tags} />}
                <p>{post.content.slice(0,100)}...</p>
                
            </PostItemBlock>
        </>
    )
}

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts({ page: 1, limit: 10 });
        console.log('posts response:', res.data);
        setPosts(res.data.items); // ← 응답 구조에 맞게
      } catch (e) {
        console.error(e);
        setError('게시글을 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;

  if(posts.length == 0) {
    return <p>게시물이 없습니다.</p>
  }
    return (
        <>
            <PostListBlock>
                {/* <WritePostButtonWrapper>
                    <Button cyan to="/write">
                        새 글 작성하기
                    </Button>
                </WritePostButtonWrapper> */}
                <div>
                    {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>
            </PostListBlock>
        </>
    )
}

export default PostList;