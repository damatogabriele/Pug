
const express = require('express');
const mod = require('./lego.json'); //Copia il file people.json dentro la variabile people
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    mod: mod.modelli //Passa il vettore profiles alla pagina index.pug
  });
});
app.get('/mod', (req, res) => {
  const costruzione = mod.modelli.find((p) => p.SetNumber === req.query.SetNumber);
  res.render('modello', {
    title: `About ${costruzione.SetName}`,
    costruzione,
  });

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
})});
