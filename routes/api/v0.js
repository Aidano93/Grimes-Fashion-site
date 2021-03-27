const express = require('express');
const Gallerie = require('../../models/gallery.js')
const Member = require('../../models/member.js')
const Subscriber = require('../../models/subscriber.js')


const router = express.Router();


//gallery JSON
router.get('/gallery', async (req, res, next) => {
  try {
    const gallery = await Gallerie.find({})
    if (gallery) return res.json(gallery)
    return next(new Error("Unable to locate images."))
  } catch(err) {
    return next(err)
  }
})

//team members JSON
router.get('/members', (req, res) => {

  Member.find({}, (err, members) => {
    if (err) {
      res.status(404)
    
    }
    res.json(members)
  })
});

//subscribers JSON
router.get('/subscribers', (req, res) => {

  Subscriber.find({}, (err, subs) => {
    if (err) {
      res.status(404)
    
    }
    res.json(subs)
  })
});

module.exports = router