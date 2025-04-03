require('dotenv').config()
const express = require('express')
const app = express()
// console.log('chai aur backend')

const port = process.env.PORT;

app.get('/', (req,res) => {
    res.send('welcome to backend')
}) 

app.get('/twitter', (req,res) => {
    res.send('redirect to twitter')
})

app.get('/login', (req,res) => {
    res.send(`<h1>login page under development</h1>`)
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})

