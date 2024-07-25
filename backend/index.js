const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');
const port=3000;
app.set('view engine','ejs');
//Inn do lines ke wajah se form ko use kar payenge 
//these are parsers!!
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,() => {
    console.log(" Its runnning got to http://localhost:3000");
});

app.get('/', (req, res) => {
    res.render('frontEnd/Homepage/index', { title: 'Homepage' });
  });
  