const express = require('express');
const router = require('./router');
const app = express();

app.use(router);

app.get('/', (req, res) => {
    res.send('Successfully connected to the server');
});

const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Server listening at http://${host}:${port}');
});
