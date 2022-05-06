import React from 'react'

const CommentsList  = ({ comments }) => (
    <div>
        <h3> Comment: </h3>
        {comments.map((comment, key) => ( 
            <div className='comment' key={key}>
                <h4>{comment.username}</h4>
                <p>{comment.content}</p>
            </div>
        ))}
    </div>
)

export default CommentsList
