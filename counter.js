const express = require('express');
 
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/', (req, res) => {
  if (!req.session.count) {
    req.session.count = 1;
  }
  else {
    req.session.count += 1;
  }
  res.render('index', {count : req.session.count});
})

app.listen(8000, () => console.log('listening on port 8000'));
