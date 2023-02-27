const PORT_DEFAULT = 8000;
const PORT = process.env.PORT || PORT_DEFAULT;
const { NODE_ENV } = process.env;

module.exports = {
  PORT,
  NODE_ENV,
};
