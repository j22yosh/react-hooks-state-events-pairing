import React from 'react'

function CommentSection({comments}) {
    console.log(comments)
  return (
    <div>
        {comments.map((comment) => {
           return <div><h2>{comment.user}</h2><h4>{comment.comment}</h4></div>
        })}
    </div>
  )
}

export default CommentSection