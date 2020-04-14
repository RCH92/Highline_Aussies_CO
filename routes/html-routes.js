var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('home.ejs'));
router.get('/about', (req, res) => res.render('about.ejs'));
router.get('/ourdogs', (req, res) => res.render('ourdogs.ejs'));
router.get('/litters', (req, res) => res.render('litters.ejs'));
router.get('/bredby', (req, res) => res.render('bred_by.ejs')); //add this
router.get('/bredby/deacon', (req, res) => res.render('deacon.ejs'));
router.get('/bredby/nike', (req, res) => res.render('nike.ejs'));
router.get('/bredby/parker', (req, res) => res.render('parker.ejs'));
router.get('/bredby/taylor', (req, res) => res.render('taylor.ejs'));
router.get('/bredby/bacio', (req, res) => res.render('bacio.ejs'));
router.get('/bredby/wyatt', (req, res) => res.render('wyatt.ejs'));
router.get('/bredby/stout', (req, res) => res.render('stout.ejs'));
router.get('/bredby/bogart', (req, res) => res.render('bogart.ejs'));
router.get('/bredby/layla', (req, res) => res.render('layla.ejs'));
router.get('/gallery', (req, res) => res.render('gallery.ejs'));
router.get('/info', (req, res) => res.render('info.ejs'));
router.get('/contact', (req, res) => res.render('contact.ejs'));
router.get('/ourdogs/allie', (req, res) => res.render('allie.ejs'));
router.get('/ourdogs/lulu', (req, res) => res.render('lulu.ejs'));
router.get('/ourdogs/dela', (req, res) => res.render('dela.ejs'));
router.get('/ourdogs/crush', (req, res) => res.render('crush.ejs'));
router.get('/litters', (req, res) => res.render('litters.ejs'));
router.get('/litters/2020', (req, res) => res.render('lulu_litter.ejs'));
router.get('/litters/development', (req, res) => res.render('litter_raising.ejs'));
router.get('/ourdogs/shimmer', (req, res) => res.render('shimmer.ejs'));
router.get('/litters/past', (req, res) => res.render('past_litters.ejs'));
router.get('/stout', (req, res) => res.render('stout.ejs'));
router.get('*',function (req, res) {
    res.redirect('/');
});
module.exports = router;