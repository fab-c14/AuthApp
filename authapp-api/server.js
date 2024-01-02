const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
const port = process.env.PORT || 3000; // Correct order for setting the port
const app = express();
const fs = require('fs')
const bcrypt = require('bcrypt');
const saltRounds = 10;
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

app.post('/sign', (req, res) => {
    const {email,password} = req.body // Use req.body instead of req.params
    // console.log(email,password);
    fs.readFile("users.csv", 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            // console.log('File content:', data);
            const lines = data.split('\n');
            console.log(lines)
            // lines.forEach(user=>{
            //     if(email===u)
            // })
            
        }
    });
    res.send('Form submitted successfully!');
});

app.post('/register',async (req,res)=>{
    const {name,email,password} = req.body 
    hashedPassword = await hashPassword(password);
    const formattedData = {name,email,hashedPassword}
    // console.log(formattedData);
    // formattedData = [formattedData.name,formattedData.email,formattedData.hashedPassword]
    // console.log(formattedData)
    fs.appendFile("users.csv", `${formattedData.name},${formattedData.email},${formattedData.hashedPassword}\n`, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
        } else {
            console.log('Data appended to file successfully.');
        }
    });
    res.send("Registered User")
})



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
