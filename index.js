const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Student = require('./models/student');  
const routes = require('./routes/student');    

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost/studentRecords', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/', routes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
