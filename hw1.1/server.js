'use strict';

const express = require('express');

// константы
const port = 8000;
const host = '127.0.0.1';

// приложение
const app = express();
app.get('/health/', (req, res) => {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  res.status(200);
  res.send({status: 'OK'});
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);
