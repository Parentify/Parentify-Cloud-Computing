const express = require('express');
const router = express.Router();
const {
    beras_putih,
    beras_merah,
    beras_hitam,
    beras_ketan,
    jagung,
    jelai,
    milet,
    oatmeal,
    quinoa,
    soba,
} = require('../handler/handler-biji');

const {
    apel,
    pisang,
    alpukat,
    kiwi,
    pepaya,
    jambu_biji,
    buah_naga,
    mangga,
    pir,
    labu_kuning,
    melon,
    buah_plum,
    buah_bit,
} = require('../handler/handler-buah');

const {
    jahe,
    kunyit,
    kayu_manis,
    ketumbar,
    daun_salam,
    daun_jeruk,
    oregano,
    bawang_bombay,
    bawang_putih,
    bawang_merah,
} = require('../handler/handler-bumbu');

const {
    daging_sapi,
    daging_kambing,
    daging_ayam,
    daging_bebek,
    daging_domba,
    telur,
} = require('../handler/handler-daging-protein');

const {
    almond,
    biji_aprikot,
    biji_labu,
    hazelnut,
    kacang_tanah,
    kacang_hijau,
    kacang_hitam,
    kacang_kedelai,
    kacang_koro,
    kacang_mede,
    kacang_merah,
    kacang_pecan,
    kacang_pinus,
    kacang_polong,
    kacang_tunggak,
    kacang_kenari,
    kuaci,
    macadamia,
    pistacio,
    tauge,
    edamame,
} = require('../handler/handler-kacang');

const {
    ikan_kembung,
    kerang_hijau,
    abalone,
    kepiting,
    tiram,
    udang,
    cumi,
    gurita,
    lobster,
    sotong,
    rumput_laut,
    ikan_salmon,
    nila,
    ikan_teri,
    ikan_tongkol,
    ikan_dori,
    ikan_bawal,
    ikan_tenggiri,
    belut,
    ikan_gabus,
    ikan_kod,
    lele,
    gurame,
    kakap,
    bandeng,
    tuna,
} = require('../handler/handler-makanan-laut');

const {
    selada,
    akar_teratai,
    arugula,
    asparagus,
    daun_bawang,
    pakcoy,
    brokoli,
    daun_kelor,
    buncis,
    bayam,
    wortel,
    kacang_panjang,
    kangkung,
    kol,
    kembang_kol,
    labu_putih,
    labu_siam,
    oyong,
    paprika,
    sawi_hijau,
    kentang,
    seledri,
    terong,
    mentimun,
    tomat,
    jamur_tiram,
    jamur_shiitake,
    jamur_enoki,
    jamur_champignon,
} = require('../handler/handler-sayur');

router.get('/all-foods', (req, res) => {
    const allFoods = {
        biji: {
            beras_putih,
            beras_merah,
            beras_hitam,
            beras_ketan,
            jagung,
            jelai,
            milet,
            oatmeal,
            quinoa,
            soba,
        },
        buah: {
            apel,
            pisang,
            alpukat,
            kiwi,
            pepaya,
            jambu_biji,
            buah_naga,
            mangga,
            pir,
            labu_kuning,
            melon,
            buah_plum,
            buah_bit,
        },
        bumbu: {
            jahe,
            kunyit,
            kayu_manis,
            ketumbar,
            daun_salam,
            daun_jeruk,
            oregano,
            bawang_bombay,
            bawang_putih,
            bawang_merah,
        },
        dagingProtein: {
            daging_sapi,
            daging_kambing,
            daging_ayam,
            daging_bebek,
            daging_domba,
            telur,
        },
        kacang: {
            almond,
            biji_aprikot,
            biji_labu,
            hazelnut,
            kacang_tanah,
            kacang_hijau,
            kacang_hitam,
            kacang_kedelai,
            kacang_koro,
            kacang_mede,
            kacang_merah,
            kacang_pecan,
            kacang_pinus,
            kacang_polong,
            kacang_tunggak,
            kacang_kenari,
            kuaci,
            macadamia,
            pistacio,
            tauge,
            edamame,
        },
        makananLaut: {
            ikan_kembung,
            kerang_hijau,
            abalone,
            kepiting,
            tiram,
            udang,
            cumi,
            gurita,
            lobster,
            sotong,
            rumput_laut,
            ikan_salmon,
            nila,
            ikan_teri,
            ikan_tongkol,
            ikan_dori,
            ikan_bawal,
            ikan_tenggiri,
            belut,
            ikan_gabus,
            ikan_kod,
            lele,
            gurame,
            kakap,
            bandeng,
            tuna,
        },
        sayur: {
            selada,
            akar_teratai,
            arugula,
            asparagus,
            daun_bawang,
            pakcoy,
            brokoli,
            daun_kelor,
            buncis,
            bayam,
            wortel,
            kacang_panjang,
            kangkung,
            kol,
            kembang_kol,
            labu_putih,
            labu_siam,
            oyong,
            paprika,
            sawi_hijau,
            kentang,
            seledri,
            terong,
            mentimun,
            tomat,
            jamur_tiram,
            jamur_shiitake,
            jamur_enoki,
            jamur_champignon,
        },
    };

    res.send(allFoods);
});

module.exports = router;