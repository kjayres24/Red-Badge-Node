require('dotenv').config();

var express = require('express');
var app = express();
let Psnlstorieslegends = require('./controllers/psnlstorieslegendscontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');
var huntlocations = require('./controllers/huntlocationscontroller');
var user = require('./controllers/useradmincontroller');

sequelize.sync();

app.use(bodyParser.json());

app.use('/huntlocations', huntlocations);


app.use('/user', user);


app.use(require('./middleware/headers'));

app.use('/psnllgnd',Psnlstorieslegends)

app.use(require('./middleware/validate-session'));

app.listen(3000, function () {
    console.log('App is listening on 3000.');
});