console.log('Hello');
const express = require('express')//you can finde express to module file
const app = express()
const Product = require('./models/productModels')
const mongoose = require('mongoose')

app.use(express.json())//middlewearr
app.use(express.urlencoded({extended: false}))

//route
app.get('/', (req,res) => {
    res.send('Hello NODE API')

})
app.get('/blog', (req,res) => {
        res.send('Hello Blog My name is Nikos')
})

app.get('/products' , async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
} )

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id); // Changed variable name from Product to product
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.post('/product', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//update
app.put('products/:id' , async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        //we cannot find any data in database
        if(!product){
            return res.status(404).json({message: 'cannot find any product with ID ${id}'})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} )



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