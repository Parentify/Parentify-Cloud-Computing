const express = require('express');
const router = require('./router');
const app = express();

app.use(router);

app.get('/', (req, res) => {
    res.send('Successfully connected to the server');
});

const server = app.listen(3000 || 8080, () => {
    console.log('Server listening at http://${3000}');
});
