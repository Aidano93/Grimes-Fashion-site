const express = require('express');
const Image = require('../../../../cpnt262-a5/models/image.js');
const Gallerie = require('../../models/gallery.js')
const Member = require('../../models/member.js')
const Subscriber = require('../../models/subscriber.js')


const router = express.Router();



//gallery JSON
router.get('/gallery', (req, res) => {
  Gallerie.find({}, (err, images) => {
    if (err) {
      res.status(404)
    
    }
    res.json(images)
  })
})

//single image JSON

router.get('/gallery/:id', async (req, res, next) => {
  try {
    const image = await Gallerie.find({});
    if (image) return res.json(image);
    return next(new Error('failed to convert database objects into json'));
  } catch (err) {
    return next(err);
  }
});


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