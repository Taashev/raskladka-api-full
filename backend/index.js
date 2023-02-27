const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('./utils/cors');
const router = require('./routes/router');

const { PORT, NODE_ENV, MONGO_URL } = require('./config');
const app = express();

mongoose.connect(MONGO_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);
app.use('/api', router);

app.listen(PORT, (err) => {
  if (NODE_ENV !== 'production')
    console.log(
      `The server is launched in the development mode at ${PORT} port`
    );

  if (err) console.log(err);
});
