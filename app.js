const express = require('express');
const app = express();

let bijiBacang = [
    {
        name: 'bacang',
        type: 'biji',
        information: ['hamil', 'menyusui', 'pascamelahirkan', 'bayi'],
        status: [
            'tidak direkomendasikan',
            'tidak direkomendasikan',
            'tidak direkomendasikan',
            'dilarang',
        ],
        nutrition: ['sodium', 'kalium', 'vitamin A', 'Vitamin B12'],
    },
];

app.get('/biji-bacang', (req, res) => {
    res.send(bijiBacang);
});

const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Server listening at http://${host}:${port}');
});
