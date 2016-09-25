"use strict"

let express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express()


// Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Some default html shit
app.get('/', (req, res) => {
  res.send('Hello world')
})



app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
