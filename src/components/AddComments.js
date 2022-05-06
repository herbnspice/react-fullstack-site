import React, { useState } from "react";

const AddCommentForm = ( {articleName,setArticleInfo }) => {

    const [comments, setComment] = useState()
    const [username, setUsername] = useState()

    const onAddComment = async () => {

        const result = await fetch(`/api/articles/${articleName}/add-comment`, { 
            method: 'post',
            body: JSON.stringify({ name: username, content: comments }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const body = await result.json()
        setArticleInfo(body)
        setUsername('')
        setComment('')

    }
    return(
        <>
            <h3> Add a Comment </h3>
            <label> Name: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} /></label>
            <label> Comment: <textarea rows="4" cols="50" value={comments} onChange={(event) => setComment(event.target.value)} /> </label>
            <button onClick={onAddComment}> Add comments</button>
        </>
    )
}

export default  AddCommentForm