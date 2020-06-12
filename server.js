const express = require('express')
const path = require('path');
const testAPIRouter = require("./routes/testAPI")

const app = express()
const port = process.env.PORT || 5000

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Using the test route
app.use(testAPIRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))