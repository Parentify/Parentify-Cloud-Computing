const express = require('express');
const router = express.Router();
const {
    ikanKembung,
    kerangHijau,
    abalone,
    kepiting,
    tiram,
    udang,
    cumi,
    gurita,
    lobster,
    sotong,
    rumputLaut,
    ikanSalmon,
    nila,
    ikanTeri,
    ikanTongkol,
    ikanDori,
    ikanBawal,
    ikanTenggiri,
    belut,
    ikanGabus,
    ikanKod,
    lele,
    gurame,
    kakap,
    bandeng,
    tuna,
} = require('../handler/handler-makanan-laut');

router.get('/ikan-kembung', (req, res) => {
    res.send(ikanKembung);
});

router.get('/kerang-hijau', (req, res) => {
    res.send(kerangHijau);
});

router.get('/abalone', (req, res) => {
    res.send(abalone);
});

router.get('/kepiting', (req, res) => {
    res.send(kepiting);
});

router.get('/tiram', (req, res) => {
    res.send(tiram);
});

router.get('/udang', (req, res) => {
    res.send(udang);
});

router.get('/cumi', (req, res) => {
    res.send(cumi);
});

router.get('/gurita', (req, res) => {
    res.send(gurita);
});

router.get('/lobster', (req, res) => {
    res.send(lobster);
});

router.get('/sotong', (req, res) => {
    res.send(sotong);
});

router.get('/rumput-laut', (req, res) => {
    res.send(rumputLaut);
});

router.get('/ikan-salmon', (req, res) => {
    res.send(ikanSalmon);
});

router.get('/nila', (req, res) => {
    res.send(nila);
});

router.get('/ikan-teri', (req, res) => {
    res.send(ikanTeri);
});

router.get('/ikan-tongkol', (req, res) => {
    res.send(ikanTongkol);
});

router.get('/ikan-dori', (req, res) => {
    res.send(ikanDori);
});

router.get('/ikan-bawal', (req, res) => {
    res.send(ikanBawal);
});

router.get('/ikan-tenggiri', (req, res) => {
    res.send(ikanTenggiri);
});

router.get('/belut', (req, res) => {
    res.send(belut);
});

router.get('/ikan-gabus', (req, res) => {
    res.send(ikanGabus);
});

router.get('/ikan-kod', (req, res) => {
    res.send(ikanKod);
});

router.get('/lele', (req, res) => {
    res.send(lele);
});

router.get('/gurame', (req, res) => {
    res.send(gurame);
});

router.get('/kakap', (req, res) => {
    res.send(kakap);
});

router.get('/bandeng', (req, res) => {
    res.send(bandeng);
});

router.get('/tuna', (req, res) => {
    res.send(tuna);
});

module.exports = router;