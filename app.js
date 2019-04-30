const express = require('express')
// router
const indexRouter = require('./routes/index');

const app = express()

app.get('/', indexRouter)

app.listen(9000, () => console.log('Example app listening on port 9000!'))

