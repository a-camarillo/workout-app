const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const workouts = require('./routes/api/workouts');

app.use('/api/workouts', workouts);

app.listen(port, () => console.log(`Server started on port ${port}`));
