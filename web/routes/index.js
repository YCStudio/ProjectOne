var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: '超级大薯条',
        pageName:'index'
    });
});

router.get('/about1', function(req, res) {
    res.render('about1', {
        title: '超级大薯条',
        pageName:'about'
    });
});

router.get('/about2', function(req, res) {
    res.render('about2', {
        title: '超级大薯条',
        pageName:'about2'
    });
});

router.get('/about3', function(req, res) {
    res.render('about3', {
        title: '超级大薯条',
        pageName:'about3'
    });
});

router.get('/about4', function(req, res) {
    res.render('about4', {
        title: '超级大薯条',
        pageName:'about4'
    });
});

router.get('/join1', function(req, res) {
    res.render('join1', {
        title: '超级大薯条',
        pageName:'join1'
    });
});

router.get('/join2', function(req, res) {
    res.render('join2', {
        title: '超级大薯条',
        pageName:'join2'
    });
});

router.get('/join3', function(req, res) {
    res.render('join3', {
        title: '超级大薯条',
        pageName:'join3'
    });
});

router.get('/join4', function(req, res) {
    res.render('join4', {
        title: '超级大薯条',
        pageName:'join4'
    });
});

router.get('/join5', function(req, res) {
    res.render('join5', {
        title: '超级大薯条',
        pageName:'join5'
    });
});

router.get('/join6', function(req, res) {
    res.render('join6', {
        title: '超级大薯条',
        pageName:'join6'
    });
});

router.get('/join7', function(req, res) {
    res.render('join7', {
        title: '超级大薯条',
        pageName:'join7'
    });
});

router.get('/news', function(req, res) {
    res.render('news', {
        title: '超级大薯条',
        pageName:'news'
    });
});

router.get('/contact', function(req, res) {
    res.render('contact', {
        title: '超级大薯条',
        pageName:'contact'
    });
});

module.exports = router;
