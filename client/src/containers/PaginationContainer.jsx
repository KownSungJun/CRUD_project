import React from 'react'
import Pagination from '../componets/posts/Pagination'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'

const PaginationContainer = () => {
    const [searchParams] = useSearchParams()

    const { authorId } = useParams()
    const tag = searchParams.get('tag')
    const page = parseInt(searchParams.get('tag'))
    const { lastPage, posts, loading } = useSelector(({posts, loading}) => ({
        lastPage: posts.lastPage,
        posts: posts.posts,
        loading: loading['posts/LIST_POSTS']
    }))

    if(!posts || loading) return null

    return (
        <Pagination 
            tag={tag}
            username={username}
            page={parseInt(page, 10)}
            lastPage={lastPage}
        />

    )
}

export default PaginationContainer