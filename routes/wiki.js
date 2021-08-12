const express = require('express');
const router = express.Router();
const index = require('../models/views/index');
const Page = require('../models')

router.get('/', async (req,res,next)=>{
  try{
    res.send('this is displaying wikiroutes');
  }
  catch(err){
    next(err);
  }
})

router.get('/add', async(req,res,next)=>{
  try{
    res.send(index.addPage());
  }
  catch(err){
    next(err);
  }
})

router.post('/', async (req,res,next)=>{
  try{
    const page = await Page.create({
      title: res.json(req.body).title,
      content: res.json(req.body).content
    });
  }
  catch(err){
    next(err);
  }
})

module.exports=router;
