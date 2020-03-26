var express = require('express')
var app = express()

//Modules
const entry_point = require('./routes/entry-point') 

//Middleware
app.set('view engine', 'pug');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', entry_point)

app.listen(3000, () => console.log('PORT 3000 IS RUNNING'))