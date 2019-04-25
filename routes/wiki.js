const express = require("express");
const router =  express.Router();
const addPageView = require("../views/addPage");
const wikipageView = require("../views/wikipage");
const { db, Page, User } = require("../models/index");

router.get("/", (req, res, next) => {
  res.redirect('/');
})

router.post("/", async (req, res, next) =>{
  // res.send('got to POST /wiki/');
  // res.json(req.body);
  const page = new Page({
    // name: req.body.name,
    title: req.body.title,
    // email: req.body.email,
    content: req.body.content,
    status: req.body.status
  });
  try {
    console.log(page);
    await page.save();
    res.redirect("/");
  } catch (error) { next(error) }
})

router.get("/add", (req, res, next) => {
  res.send(addPageView());
})

router.get('/:slug', async (req, res, next) => {
  try {
    const pageInstance = await Page.findAll({
      where: {
          slug: req.params.slug}
    });
    res.send(wikipageView(pageInstance));
  } catch (error) { next(error) }
});



// router.post("/add", (req, res, next) => {
//   res.json(req.body);
// })

module.exports = router;
