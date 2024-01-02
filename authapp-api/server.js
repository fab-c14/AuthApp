const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const port = 3000 || process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post("/sign",(req,res)=>{
    res.send("Hey! You Just Tried To SignIn")
})
  
  // Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});