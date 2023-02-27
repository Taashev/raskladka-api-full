const express = require('express');
const router = express.Router();
const Card = require('../models/card');
const validationText = require('../utils/validationText');

router.get('/history', async (req, res) => {
  const history = await Card.find({});
  res.send({ history });
});

router.post('/text', (req, res) => {
  const { text, recordHistory } = req.body;
  const data = { text, ...validationText(text) };
  recordHistory && Card.create(data);
  res.send(data);
});

module.exports = router;
