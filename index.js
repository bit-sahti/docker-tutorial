const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
    // service name on docker compose - they share a network by default
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'mydb'
})

connection.connect()

const app = express()

app.get('/', (_, res) => {
  res.send('Hello World - from Node.js! And Full Cycle.')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
