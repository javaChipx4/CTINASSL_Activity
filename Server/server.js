const express = require('express');
const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});
 
app.post('/greetings', (req, res) => {
  const { name, course, section } = req.body;
 
  res.status(200).json({
    name: name,
    course: course,
    section: section,
    message: `Hello ${name}, from ${course}  section ${section}!`
  });
});
 
app.post('/login', (req, res) => {
    const { username, password } = req.body;
 
    if (username === 'admin' && password === 'password') {
        res.status(200).json({
            message: 'Login successful'
        });
    } else {
        res.status(401).json({
            message: 'Invalid credentials'
        });
    }
});
 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});