const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 2,
  },
  indexErrorChars: [
    {
      type: Number,
    },
  ],
  mainLanguage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('card', cardSchema);
