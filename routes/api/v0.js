const express = require('express');
const Gallerie = require('../../models/gallery.js')
const Member = require('../../models/member.js')
const Subscriber = require('../../models/subscriber.js')


const router = express.Router();


//gallery JSON
router.get('/gallery', async (req, res, next) => {
  try {
    // return next(new Error("Boom Goes The Dynamite - Something Exploded")) // Error handling test
    const gallery = await Gallerie.find({})
    if (gallery) return res.json(gallery)
    return next(new Error("Unable to locate images."))
  } catch(err) {
    return next(err)
  }
})
// router.get('/gallery', (req, res) => {
//   Gallerie.find({}, (err, images) => {
//     if (err) {
//       res.status(404)
    
//     }
//     res.json(images)
//   })
// })

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