const express = require('express');

const app = express();

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/cats', (req, res) => {
  res.render('allcats');
})

// app.get('/bounding', (req, res) => {
//   res.render('bounding');
// })

app.get('/bounding', (req, res)=>{
  let catObj = {
    food : 'the humans favorites',
    age : 'timeless',
    sleeping : 'my humans bed',
    imageurl : 'boudingwhite'
  };
  res.render('catdetails', {cat : catObj});
})


// app.get('/tesla', (req, res) => {
//   res.render('teslacat');
// })

app.get('/tesla', (req, res)=>{
  let catObj = {
    food : 'space food',
    age : '16',
    sleeping : 'mostly everywhere',
    imageurl : 'tesla-cat',
    };
  res.render('catdetails', {cat : catObj});
})


app.get("/", (req, res) => {
  res.send("hello");
})

app.listen(8000, () => console.log('listening on port 8000'));
