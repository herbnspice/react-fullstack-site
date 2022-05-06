import express from 'express'
import bodyParser from 'body-parser';

import { MongoClient } from 'mongodb' // Install Mongo DB and run `npm install --save mongodb`
const app = express();
const withDB = async ( operations, response ) => { //refractoring
    try{ 
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
        const db = client.db( 'my-blog')
        await operations(db)

        client.close()
    } catch( error ){
        response.status(500).json({
            message : 'Error connecting to db', error
        })
    }
}

app.use( bodyParser.json())

app.get('/api/articles/:name', async ( req, res ) => {
        withDB( async (db) => {
            const articleName = req.params.name
            const articleInfo = await db.collection('articles').findOne({ name : articleName})
            res.status(200).json( articleInfo )
        }, res )
})
app.post('/api/articles/:name/add-comment', async ( req, res ) => {
    withDB( async (db) => {
        const articleName = req.params.name
        const body = {
            name : req.body.name,
            content: req.body.content
        }
        const articleInfo = await db.collection('articles').findOne({ name : articleName})
            await db.collection('articles').updateOne({ name: articleName }, {
                '$set' : {
                    comments : articleInfo.comments.concat( body )
                }
            })
     
        const updatedArticleInfo = await db.collection('articles').findOne({ name : articleName})
        res.status(200).json( updatedArticleInfo )
    }, res )
        

} )
app.post('/api/articles/:name/upvote', async ( req, res ) => {
    withDB( async (db) => {
        const articleName = req.params.name
        const articleInfo = await db.collection('articles').findOne({ name : articleName})
            await db.collection('articles').updateOne({ name: articleName }, {
                '$set' : {
                    upvotes : articleInfo.upvotes += 1
                }
            })
        const updatedArticleInfo = await db.collection('articles').findOne({ name : articleName})
        res.status(200).json(updatedArticleInfo)
    }, res)
} )


app.listen( 8000, () =>  console.log( 'listening to port 8000'))