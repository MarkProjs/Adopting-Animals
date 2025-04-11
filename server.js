const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Force correct Content-Type for JS
app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript');
  }
  next();
});

app.use(express.static(path.join(__dirname, 'pages')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());


app.post ('/create-account', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let data = `${username}:${password}\n`;

  fs.appendFile('login.txt', data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating account');
    } else {
      console.log('Account created successfully');
    }
  });
  
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    fs.readFile('login.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error logging in');
      }
  
      const users = data.split('\n').map(line => line.trim()); // trim to avoid issues with newline chars
      const credentials = `${username}:${password}`;
      
      const isValid = users.includes(credentials); // exact match
  
      if (isValid) {
        console.log('Login successful');
        return res.json({ success: true, username: username });
      } else {
        console.log('Login failed');
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    });
  });

app.post('/give-away', (req, res) => {
  const petType = req.body.petType;
  const breed = req.body.breed;
  const age = req.body.age;
  const gender = req.body.gender;
  const getAlong = req.body.getAlong;
  const currentOwnerEmail = req.body.currentOwnerEmail;
  const description = req.body.description;
  const photo = req.body.photo;
  const currentOwner = req.body.currentOwner;

  res.send({ message: 'Pet given away successfully' });

});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
