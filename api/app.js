const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.json({ message: "Winata Tristan,18222061,API TST, Halo." });
});


app.get('/api/info', (req, res) => {
    res.json({
        message: "API deployed successfully!",
        version: "1.0.0",
        author: "Winata Tristan,18222061"
    });
});

module.exports = app;