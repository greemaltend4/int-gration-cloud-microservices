const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue dans l'application microservices!');
});

app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`);
});
