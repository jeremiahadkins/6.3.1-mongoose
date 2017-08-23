const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes.js');

const app = express();
mongoose.connect('mongodb://localhost/test');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// bootstrap static
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.set('view engine', 'handlebars');


router(app);


app.listen(3000);
