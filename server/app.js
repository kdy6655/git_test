const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const Signin = [{
    id: String,
    password: String,
    done: Boolean,
}];

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/api/todo', (req, res) => {
    res.json(Signin);
});

app.post('/api/todo', (req, res) => {
    const { id, password, done } = req.body;
    console.log('req.body : ', req.body);
    Signin.push({
        id,
        password,
        done,
    });
    return res.send('success')
});

app.listen(4000, () => {
    console.log("server start!!");
});