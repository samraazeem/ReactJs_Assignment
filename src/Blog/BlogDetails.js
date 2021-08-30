import React, { Component } from 'react'
import CommentData from '../Data/comment.json'

import CommentList from './CommentList'

class BlogDetail extends Component{
    render () {
        const {blog} = this.props
        return (
            <div >
                <h4>{blog.title}</h4>
                <pre>   {blog.description}</pre>
                {CommentData.map((commentItem, index) => {
                    return <CommentList comment={commentItem} blogId= {blog.id} key={`comment-list-key ${index}`} />
                })}
                <hr></hr>
            </div>
        )
    }
}


export default BlogDetail
