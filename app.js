const express = require('express');
const bodyParser = require('body-parser');
const feedRoute = require('./route/feed');

const app = express();
app.use(bodyParser.json());

app.use('/', feedRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});