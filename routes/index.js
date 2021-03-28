const express = require('express');
const router = express.Router();
const api = require('./api/v0');
const config = require('../config');
const Gallerie = require('../models/gallery.js');

// global ejs variabls
router.use((req, res, next) => {
  res.locals = config
  next()
});

// Home
router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: 'Home'});
});

// Gallery
router.get('/gallery', (req, res) => {
  res.render('pages/gallery', {pageTitle: 'Gallery'});
});

// Single gallery image
router.get('/gallery/:id', async (req, res, next) => {
  try {
    const image = await Gallerie.findOne({id: req.params.id});
    if(image) return res.render("pages/single-image", {
      pageTitle: image.title,
      image: image,
    });
    return next(new Error ('Failed to find image'));
  }catch(err){
    return next(err);
  }
});

// Subscribe
router.get('/subscribe', (req, res) => {
  res.render('pages/subscribe', {pageTitle: 'Subscribe'});
})

// Team
router.get('/team', (req, res) => {
  res.render('pages/member', {pageTitle: 'Meet the Team'});
});

// Admin
router.get('/admin', (req, res) => {
  res.render('pages/admin', {pageTitle: 'Admin'});
});

router.use('/api/v0/', api);

module.exports = router;

