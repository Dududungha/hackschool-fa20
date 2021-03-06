const express = require('express');
const Pokemon = require('../models/pokemon');

const router = express.Router();

router.get('/pokemon', async (req, res) => {
  const pokemon = await Pokemon.find().exec()
  res.status(200).json({ pokemon });
});

router.post('/pokemon', async (req, res) => {
  const { pokemon } = req.body;
  const createdPokemon = await Pokemon.create(pokemon);
  res.status(200).json({ pokemon: createdPokemon });
});

module.exports = router;