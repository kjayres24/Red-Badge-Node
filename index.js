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

app.use(require('./middleware/headers'));

app.use('/huntlocations', huntlocations);


app.use('/user', user);





app.use('/psnllgnd', Psnlstorieslegends)

app.use(require('./middleware/validate-session'));

app.listen(process.env.PORT, function () {
    console.log(`server is listening on port ${process.env.PORT}`);
});