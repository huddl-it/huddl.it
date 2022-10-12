const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000

// connect using postgres
const { Pool } = require('pg');
const {response} = require("express");
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'pendi1901',
    port: 5432,
});



app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

//Get  User Profile
app.get('/user/:id',( request,res   )=>{

    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)

    })

})

//Get All Questions from user
app.get('/questions/:id',( request,res   )=>{

        const id = parseInt(request.params.id)
        pool.query('SELECT * FROM questions WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)

        })

})

//Post a new question by a user
app.post('/questions/:id',( request,res   )=>{
    const threadID = parseInt(request.params.id)
    const {subject} = request.body.subject
    const {content}  =request.body.content

    pool.query('INSERT INTO Threads (threadID,subject,content,upvotes,reportCount,isBanned,isPosted,createdAt,updatedAt) VALUES ($1,$2,$3)', [threadID,subject,content,0,0,0,Date,Date], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)

    })
})

//Post a new answer to a question
app.post('/answers/:id',( request,res   )=>{
    const threadID = parseInt(request.params.id)
    const{subject}=request.subject
    const {content}  =request.content

    pool.query('INSERT INTO Answers (answerID,subject,content,reportCount,upvotes,isApproved,isBanned,isPosted,createdAt,updatedAt) VALUES ($1,$2,$3)', [threadID,subject,content,0,0,0,0,Date,Date], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)

    })
})

//Get all answers to a question
app.get('/thread/answers/:id',( request,res   )=>{
    const threadID = request.body.threadID
    // const answerID = parseInt(request.params.id)
    pool.query('SELECT * FROM Answer WHERE threadID = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)

    })
})


app.listen(port, () => {
    console.log("Server is up and listening on 3000")
});
