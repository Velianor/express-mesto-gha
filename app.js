const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

app.use((req, next) => {
  req.user = {
    _id: '647efda413ce7cf48ab11682',
  };

  next();
});

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', { useNewUrlParser: true });

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});