const express = require('express');
const cors = require('cors');
const server = express();

const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinodejs')

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(cors());

const schoolRoute = require('./api/routes/schoolRoute');
schoolRoute(server);

const userRoute = require('./api/routes/userRoute');
userRoute(server);

const appRoute = require('./api/routes/appRoute');
appRoute(server);

server.listen(port, hostname);