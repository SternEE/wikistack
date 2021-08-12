const express = require('express');
const app = require ('../app.js');
const router = express.Router();
const views = require('../models/views/index.js')

router.get('/models', async (req, res, next)=>{
  try{
  console.log('getting request');
  res.send(views.main());
  }
  catch(error){
    next(error);
  }
})

module.exports = router;
