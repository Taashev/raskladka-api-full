const PORT_DEFAULT = 8000;
const PORT = process.env.PORT || PORT_DEFAULT;
const { NODE_ENV } = process.env;
const MONGO_DEFAULT_URL = 'mongodb://127.0.0.1:27017/raskladkadb';
const MONGO_URL = process.env.MONGO_URL || MONGO_DEFAULT_URL;

module.exports = {
  PORT,
  NODE_ENV,
  MONGO_URL,
};
