const express = require('express');
const router = express.Router();

const {
    selada,
    akarTeratai,
    arugula,
    asparagus,
    daunBawang,
    pakcoy,
    brokoli,
    daunKelor,
    buncis,
    bayam,
    wortel,
    kacangPanjang,
    kangkung,
    kol,
    kembangKol,
    labuPutih,
    labuSiam,
    oyong,
    paprika,
    sawiHijau,
    kentang,
    seledri,
    terong,
    mentimun,
    tomat,
    jamurTiram,
    jamurShiitake,
    jamurEnoki,
    jamurChampignon,
} = require('../handler/handler-sayur');

router.get('/selada', (req, res) => {
    res.send(selada);
});

router.get('/akarTeratai', (req, res) => {
    res.send(akarTeratai);
});

router.get('/arugula', (req, res) => {
    res.send(arugula);
});

router.get('/asparagus', (req, res) => {
    res.send(asparagus);
});

router.get('/daunBawang', (req, res) => {
    res.send(daunBawang);
});

router.get('/pakcoy', (req, res) => {
    res.send(pakcoy);
});

router.get('/brokoli', (req, res) => {
    res.send(brokoli);
});

router.get('/daunKelor', (req, res) => {
    res.send(daunKelor);
});

router.get('/buncis', (req, res) => {
    res.send(buncis);
});

router.get('/bayam', (req, res) => {
    res.send(bayam);
});

router.get('/wortel', (req, res) => {
    res.send(wortel);
});

router.get('/kacangPanjang', (req, res) => {
    res.send(kacangPanjang);
});

router.get('/kangkung', (req, res) => {
    res.send(kangkung);
});

router.get('/kol', (req, res) => {
    res.send(kol);
});

router.get('/kembangKol', (req, res) => {
    res.send(kembangKol);
});

router.get('/labuPutih', (req, res) => {
    res.send(labuPutih);
});

router.get('/labuSiam', (req, res) => {
    res.send(labuSiam);
});

router.get('/oyong', (req, res) => {
    res.send(oyong);
});

router.get('/paprika', (req, res) => {
    res.send(paprika);
});

router.get('/sawiHijau', (req, res) => {
    res.send(sawiHijau);
});

router.get('/kentang', (req, res) => {
    res.send(kentang);
});

router.get('/seledri', (req, res) => {
    res.send(seledri);
});

router.get('/terong', (req, res) => {
    res.send(terong);
});

router.get('/mentimun', (req, res) => {
    res.send(mentimun);
});

router.get('/tomat', (req, res) => {
    res.send(tomat);
});

router.get('/jamurTiram', (req, res) => {
    res.send(jamurTiram);
});

router.get('/jamurShiitake', (req, res) => {
    res.send(jamurShiitake);
});

router.get('/jamurEnoki', (req, res) => {
    res.send(jamurEnoki);
});

router.get('/jamurChampignon', (req, res) => {
    res.send(jamurChampignon);
});

module.exports = router;