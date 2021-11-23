const express = require('express');
const path = require('path');
const app = express();
const port = 3030
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/home.html'))
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/login.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/register.html"));
});

app.listen(process.env.PORT || 3000, () => console.log('Escuchando en el puerto'));

app.post('/login', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + "/views/login.html");
});