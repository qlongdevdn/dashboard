const express = require('express');
const {
    APP_PORT,
    APP_URL,
    MODE_DEPLOY,
    DIRNAME,
    KEY_FILE,
    CERT_FILE,
    // CERT_CA_FILE,
} = require('./src/config/app.config');

// Mongo connection
require('./src/services/db.service');

// Variable
const app = express();
const bodyParser = require('body-parser');
const PORT = APP_PORT || 8001;
const path = require('path');
let server;
let APP_HTTP;
//HTTP SSL
if (MODE_DEPLOY === 'production') {
    const https = require('https');
    const fs = require('fs');
    APP_HTTP = 'https://'
    server = https.createServer(
        {
            key: fs.readFileSync(path.join(DIRNAME, KEY_FILE)),
            cert: fs.readFileSync(path.join(DIRNAME, CERT_FILE)),
            // ca: fs.readFileSync(path.join(DIRNAME, CERT_CA_FILE)),
        },
        app
    );
} else {
    // HTTP NO SSL
    const http = require('http');
    server = http.createServer(app);
    APP_HTTP = 'http://'
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Logging
const morgan = require('morgan');
app.use(morgan('combined'));

// Cors config
const cors = require('cors');
app.use(cors({ credentials: true, origin: '*' }));

// Helmet
const helmet = require('helmet');
app.use(
    helmet({
        crossOriginEmbedderPolicy: false,
    })
);

// Compression Middleware
const compression = require('compression');
app.use(compression());

//Routes
const routes = require('./src/routes/app.route');
routes(app);
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => {
    console.log(`Server started at ${APP_HTTP}${APP_URL}:${PORT}`);
});
