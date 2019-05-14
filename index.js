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
<<<<<<< HEAD
=======

app.use('/huntlocations', huntlocations);


app.use('/user', user);

>>>>>>> 5a014b8069a44cad4289b986527e90ab8e0443f4

app.use(require('./middleware/headers'));

app.use('/huntlocations', huntlocations);

app.use('/user', user);

app.use('/psnllgnd', Psnlstorieslegends)

app.use(require('./middleware/validate-session'));

app.listen(3000, function () {
    console.log('App is listening on 3000.');
});