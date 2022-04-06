const express = require('express');
const fs = require('fs');
const path = require('path');

const port = 9000;
const app = express();

app.use(express.json());

const pathToFrontend = path.join(`${__dirname}/../frontend`);

app.get('/', (req, res, next) => { 
    res.sendFile(path.join(`${pathToFrontend}/../frontend/index.html`));
})

app.get('/image-list', (req, res, next) => { 
    res.sendFile(path.join(`${pathToFrontend}/../frontend/data.json`));
})

app.use('/pub', express.static(`${pathToFrontend}/../frontend/public`));

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
})