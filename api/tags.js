const express = require('express');
const tagsRouter = express.Router();
const { getAllTags} = require('../db')

postsRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");

  next();
});

postsRouter.get('/', async (req, res)=>{
  const tags = await getAllTags();

  res.send({
    tags
  })
})

module.exports = tagsRouter;