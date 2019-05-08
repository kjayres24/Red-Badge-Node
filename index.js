require('dotenv').config();

var express = require('express');
var app = express();
let Psnlstorieslegends = require('./controllers/psnlstorieslegendscontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/psnllgnd',Psnlstorieslegends)

app.use(require('./middleware/validate-session'));

app.listen(3000, function () {
    console.log('App is listening on 3000.');
});