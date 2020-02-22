const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'App Builder',
        css: 'index.css'
    })
})

module.exports = router;