const express = require("express");
const router =  express.Router();
const addPageView = require("../views/addPage");

router.get("/", (req, res, next) => {
  res.send('got to GET /wiki');
})

router.post("/", (req, res, next) =>{
  res.send('got to POST /wiki/');
})

router.get("/add", (req, res, next) => {
  res.send(addPageView());
})

module.exports = router;
