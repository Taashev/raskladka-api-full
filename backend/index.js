const express = require('express');
const cors = require('./utils/cors');

const { PORT, NODE_ENV } = require('./config');
const app = express();

app.use(cors);

app.listen(PORT, (err) => {
  if (NODE_ENV !== 'production')
    console.log(
      `The server is launched in the development mode at ${PORT} port`
    );

  if (err) console.log(err);
});
