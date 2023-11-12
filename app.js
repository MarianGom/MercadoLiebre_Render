const express = require ('express');
const app = express();
const path = require('path')

const PORT = 3030

/*app.get('/',(req, res) => {
    console.log();
    res.send("TamoActivo?")
})*/

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})
app.get('/babbage',(req, res) => {
    res.sendFile(path.resolve('./views/babbage.html'));
})
app.get('/lovelace',(req, res) => {
    res.sendFile(path.resolve('./views/lovelace.html'));
})
app.get('/berners-lee',(req, res) => {
    res.sendFile(path.resolve('./views/berners-lee.html'));
})
app.get('/clarke',(req, res) => {
    res.sendFile(path.resolve('./views/clarke.html'));
})
app.get('/hamilton',(req, res) => {
    res.sendFile(path.resolve('./views/hamilton.html'));
})
app.get('/hopper',(req, res) => {
    res.sendFile(path.resolve('./views/hopper.html'));
})
app.get('/turing',(req, res) => {
    res.sendFile(path.resolve('./views/turing.html'));
})

app.listen(3030, () => {
    console.log("el servi está corriendo")
})
