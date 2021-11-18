const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

const workouts = require('./routes/api/workouts');

app.use(express.static(__dirname+'../dist/'));

app.use('/api/workouts', workouts);

app.listen(port);
