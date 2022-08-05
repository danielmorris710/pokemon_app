const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Pokemon = require('./models/pokemon')
const app = express()
const port = process.env.PORT || 3003
const methodOverride = require('method-override')
const pokemonData = require('./utilities/pokemonData')

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
app.use(methodOverride('_method'))

//seed route
app.get('/pokemon/seed', async (req, res)=>{
    await Pokemon.deleteMany({})
    await Pokemon.create(pokemonData)
    res.redirect('/pokemon')
})

//my routes
app.get('/', (req, res) => {
    res.render('Home')
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
    req.body.name = req.body.name[0].toUpperCase() + req.body.name.slice(1)
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

//edit page route
app.get('/pokemon/:id/edit', (req,res)=>{
    Pokemon.findById(req.params.id,(err, foundPokemon)=>{
        if(!err){
            res.render('Edit', {
                pokemon: foundPokemon
            })
        }else{
            res.send({
                message:err.message
            })
        }
    })
})

// update route
app.put('/pokemon/:id', (req, res) => {
    req.body.name = req.body.name[0].toUpperCase() + req.body.name.slice(1)
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, pokemon) => {
        res.redirect(`/pokemon/${req.params.id}`)
    })
})

//delete route
app.delete('/pokemon/:id', (req,res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/pokemon')
    })
})

//port 
app.listen(port, () => {
    console.log("I am listening on port", port);
})