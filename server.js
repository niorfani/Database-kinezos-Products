console.log('Hello');
const express = require('express')//you can finde express to module file
const app = express()
const mongoose = require('mongoose')

//route
app.get('/', (req,res) => {
    res.send('Hello NODE API')

})
app.get('/blog', (req,res) => {
        res.send('Hello Blog My name is Nikos')
})




mongoose.
connect('mongodb+srv://niorfani123:123456nikos@orfanidisapi.ubajhpr.mongodb.net/Node-Api?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
    console.log('Node API app is running on port 3000')    
});
    
}).catch((error) => {
    console.log(error)
})