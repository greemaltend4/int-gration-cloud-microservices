const express = require('express');
const router = express.Router();

// Exemple de route
router.get('/api/item', (req, res) => {
  res.json({ message: 'Voici un élément' });
});

module.exports = router;
