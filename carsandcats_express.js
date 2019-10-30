const express = require('express');

const app = express();

app.use(express.static(__dirname + "/static"));
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');





app.get('/cats', (req, res) => {
  res.sendfile('./static/html/cats.html');
})

app.get('/cars', (req, res) => {
  res.sendfile('./static/html/cars.html');
})

app.get('/form', (req, res) => {
  res.sendfile('./static/html/form.html');
})


app.get('/', (request, response) => {
  response.send('Hello Express');
});




// eslint-disable-next-line no-console
app.listen(8000, () => console.log('listening on port 8000'));
