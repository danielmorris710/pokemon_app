const express = require('express')
const pokemon = require('./models/pokemon.js')
const port = 3000
const app = express()

app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!');
}) 

app.get('/pokemon', function(req,res){
    res.send(pokemon)
})


app.listen(port, function() {
    console.log('Listening on port 3000');
   })