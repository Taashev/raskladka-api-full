const express = require('express');

const { PORT, NODE_ENV } = require('./config');
const app = express();

app.listen(PORT, (err) => {
  if (NODE_ENV !== 'production')
    console.log(
      `The server is launched in the development mode at ${PORT} port`
    );

  if (err) console.log(err);
});
