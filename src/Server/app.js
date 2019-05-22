const express = require('express');
const path = require('path');



const app = express();

//needed to server static files, like HTML, CSS and JS.
app.use(express.static('public'));

//handling 404
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = {app};
