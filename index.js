const express = require('express')
const app = express()
const port = process.env.PORT || 5000


const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com"
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com"
    }
];


app.get('/', (req, res) => {
    res.send('users management running')
})

app.get('/users', (req , res) => {
    res.send(users)
})


app.listen(port)