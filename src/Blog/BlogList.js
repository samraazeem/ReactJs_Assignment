import React, { Component } from 'react'
import BlogData from '../Data/blog.json'

import BlogDetail from './BlogDetails'

class PostList extends Component{
    render () {
        return (
            <div>
                <h1><u>BLOG</u></h1>
                {BlogData.map((blogItem, index) => {
                    return <BlogDetail blog={blogItem} key={`blog-list-key ${index}`} />
                })}
            </div>
        )
    }
}

export default PostList