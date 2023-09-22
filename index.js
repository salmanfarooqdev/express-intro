const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  //res.send('home page');
  res.render('index', { text: "world"})
})

app.get('/about', (req,res)=>{
  res.render('about')
})

app.get('/contact-me', (req,res)=>{
  res.render('contact-me')
})

app.get('/:id', (req, res)=>{
  res.render('404')
})




app.listen(8080, () => {
  console.log(`server is running on port 8080`);
});
