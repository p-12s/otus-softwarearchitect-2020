'use strict';

const express = require('express');

// константы
const port = 8000;
const host = '127.0.0.1';

// приложение
const app = express();
app.get('/health/', (req, res) => {
  //setTimeout(function() {  
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.status(200);
    res.send({status: 'OK'});
  //}, 5000);
});

app.get('/version/', (req, res) => {
  //setTimeout(function() {  
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.status(200);
    res.send({version: '0.2'});
  //}, 5000);
});

app.listen(port);
console.log(`running on http://${host}:${port}`);
