const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000

//connect using postgres
const { Pool } = require('pg');
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




app.listen(port, () => {
    console.log("Server is up and listening on 3000")
});
