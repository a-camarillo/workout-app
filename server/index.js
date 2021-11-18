const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

const workouts = require('./routes/api/workouts');

app.use('/api/workouts', workouts);

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(__dirname + '../dist/'));

    app.get(/.*/, (req, res) => res.sendFile(__dirname + '../dist/index.html'));
}

app.listen(port);
