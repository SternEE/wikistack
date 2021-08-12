const express = require('express');
const app = require ('../app.js');
const router = express.Router();
const views = require('../models/views/index.js')

router.get('/', async (req, res, next)=>{
  try{
  console.log('getting request');
  //res.redirect will redirect home page to /wiki
  res.redirect('/wiki');
  //sends main function content
  res.send(views.main());
  }
  catch(error){
    next(error);
  }
})

module.exports = router;
