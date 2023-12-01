const express = require('express');
const router = express.Router();
const { bacang, bakpauIsi, bekatul } = require('./handler');

router.get('/biji-bacang', (req, res) => {
    res.send(bacang);
});

router.get('/biji-bakpau', (req, res) => {
    res.send(bakpauIsi);
});

router.get('/biji-bekatul', (req, res) => {
    res.send(bekatul);
});

module.exports = router;