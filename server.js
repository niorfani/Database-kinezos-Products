console.log('Hello');
const express = require('express')//you can finde express to module file
const app = express()

//route
app.get('/', (req,res) => {
    res.send('Hello NODE API')

}
)
app.listen(3000), ()=> {
    console.log('Node API app is running on port 3000')    
}