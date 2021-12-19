const express = require('express');
const bodyParser = require('body-parser');

const router = require('./models/route');

const app = express();

app.use(bodyParser.json());

app.use('/api/books', router);

app.listen(5000);

// app.listen(PORT, () => console.log(`App listening on port ${PORT}`));