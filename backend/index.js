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



app.listen(port, () => {
    console.log("Server is up and listening on 3000")
});
