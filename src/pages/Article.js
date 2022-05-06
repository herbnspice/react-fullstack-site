import React, { useEffect, useState } from "react";
import Articles  from "../data/articles.json";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddComments";
import Upvote from "../components/Upvote";
import { useParams } from "react-router-dom";
const Article = ( ) => {
    const {name} = useParams()
    const article =  Articles.filter( article => ( article.name === name) )
    const [ articleInfo, setArticleInfo ] = useState({ upvotes : 0, comments : []})


    console.log( articleInfo)
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/api/articles/${name}`)
            const body = await result.json()
            setArticleInfo( body )
        }
        fetchData()
    },[name])
    return( 
        <div> 
            <h1> Article </h1>
            <Upvote articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
            { article.map( (a, i ) =>  (
                <div key={i}>
                    <p> {a.title} </p>
                    <p> {a.content} </p>
                    </div>
            ))}

            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
            <CommentsList comments={articleInfo.comments}/>
           
        </div>
    )
}

export default Article;