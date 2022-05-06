import React from "react";

const Upvote = ({articleName, upvotes,  setArticleInfo}) => {
    
const upvoteArticle =  async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
        method: 'POST',
    })
    const body = await result.json()
    setArticleInfo(body)
}
return (
    <div id="upvotes-section">
        <p> This post has been upvotes { upvotes } votes</p>
        <button onClick={ upvoteArticle }> Upvote </button>
    </div>
)};

export default Upvote
