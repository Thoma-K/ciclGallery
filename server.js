const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('dist'));

app.use((req, res) => {
  res.sendFile('index.html');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`app listetning on port ${port}`));
