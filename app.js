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

app.get('/biji-bacang', (res) => {
    res.send(bijiBacang);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server is up and listening on ' + PORT);
});
