const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    fileUpload = require('express-fileupload');

const config = require('./config/main');
const router = require('./router');


mongoose.connect(config.database,{useMongoClient:true});


app.use(cors());

let server;
if (process.env.NODE_ENV != config.test_env){
    let port = process.env.PORT || config.port;
    console.log(`Your server is running on port ${port}.`);
    server = app.listen(port);
}else {
    console.log(`Your server is running on port ${config.test_port}.`);
    server = app.listen(config.test_port);
}


// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());
app.use(logger('dev'));


// Enable CORS from client-side
app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    var allowedOrigins = ['http://localhost', 'http://localhost:3001', 'http://localhost:3000', 'http://178.128.73.230:3000'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    console.log("use index" );

    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

// Import routers to be served
router(app);

module.exports = server;