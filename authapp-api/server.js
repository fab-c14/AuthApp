const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
const port = process.env.PORT || 3000; // Correct order for setting the port
const app = express();
const fs = require('fs').promises;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Hash a password
async function hashPassword(password) {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

// Verify a password
async function verifyPassword(password, hashedPassword) {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw error;
    }
}

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/sign', async (req, res) => {
    const { email, password } = req.body;

    try {
        const data = await fs.readFile("users.csv", 'utf8');

        const lines = data.split('\n');
        let user = [];

        lines.forEach(line => {
            if (line.includes(email)) {
                user.push(line);
            }
        });
        
        if (user.length>0) {
            user = user[0];
            user = user.split(',');
            const result = await verifyPassword(password,user[2])
            if(result){
                res.json('success');
            } else{
                res.status(400).json("Password Didn't Match")
            }
        } else {

            res.status(400).json("User Not Found Please Register First")
        }
    } catch (err) {
        console.error('Error reading file:', err);
        res.send('Error reading file');
    }
});


app.post('/register',async (req,res)=>{
    const {name,email,password} = req.body 
    hashedPassword = await hashPassword(password);
    const formattedData = {name,email,hashedPassword}
 
    fs.appendFile("users.csv", `${formattedData.name},${formattedData.email},${formattedData.hashedPassword}\n`, (err) => {
        if (err) {
            res.status(400).json("there is something wrong!!");
        } else {
            // console.log('Data appended to file successfully.');
            res.json("success");
        }
    });
   
})



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
