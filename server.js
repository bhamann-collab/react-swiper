const express = require('express')
const path = require('path');
const testAPIRouter = require("./routes/testAPI")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 5000

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, './client/public')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

//Using the test route
app.use(testAPIRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))