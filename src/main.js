const ejs = require('ejs');
const express = require('express');
const bodyparser = require("body-parser");
const path = require('path')
const http = require('http');

const utils = require('./utils');
const route = require('./route');
//const routevi = require('./route-vi');


const main = () => {
    const app = express();
    app.use(bodyparser.urlencoded({
        extended: true,
    }));
    app.use(bodyparser.json());
    app.use('/public', express.static(path.join(utils.rootPath, '/public')));
    app.use(express.static(path.join(utils.rootPath, '/public'), {
        maxAge: 259000000
    }));
    app.set('view engine', 'ejs');
    //app.use('/vi/', routevi);
    app.use('/', route);
    const server = http.createServer(app);
    const port = process.env.PORT || 5500;

    app.listen(port, () => {
        console.log('\x1b[32m%s\x1b[0m', `Server running at port ${port}`);
    });
};


main();