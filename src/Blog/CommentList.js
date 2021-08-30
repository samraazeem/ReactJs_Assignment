import React, { Component } from 'react'

class CommentList extends Component {
    render() {
        console.log(this.props)

        const { comment, blogId } = this.props
        
        return (
            <div >
                {
                   comment.isActive && blogId===comment.blogID && <pre>   {comment.comment}</pre>
                }
            </div>
        )
    }
}

export default CommentList