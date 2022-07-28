const express = require('express')
const pokemon = require('./models/pokemon.js')
const port = 3000
const app = express()


//setting up my views
app.set('view engine', 'jsx'); //setting up our HTML template
app.engine('jsx', require('express-react-views').createEngine()); //initializing our engine 

//my routes
app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!');
}) 

app.get('/pokemon', function(req,res){
    res.render('Index')
})

//port 
app.listen(port, function() {
    console.log('Listening on port 3000');
   })