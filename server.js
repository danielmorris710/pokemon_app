const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Pokemon = require('./models/pokemon')
const app = express()
const port = process.env.PORT || 3003

//connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

//setting up my views
app.set('view engine', 'jsx'); //setting up our HTML template
app.engine('jsx', require('express-react-views').createEngine()); //initializing our engine 

//middleware
app.use(express.urlencoded({extended:false}));

//my routes
app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!');
}) 

app.get('/pokemon',(req,res)=>{
    Pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        })
    })
})

//new fruit put this above your Show route
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//create
app.post('/pokemon/', (req, res)=>{
    Pokemon.create(req.body, ()=>{
         res.redirect('/pokemon'); //send the user back to /pokemon
    });
   
});

//Show route
app.get('/pokemon/:id', (req,res)=>{
   Pokemon.findById(req.params.id, (err, foundPokemon)=>{
    res.render('Show', {
        pokemon: foundPokemon
    })
   })
})

//delete

//port 
app.listen(port, () => {
    console.log("I am listening on port", port);
})