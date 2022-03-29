const express = require('express');
const port =8000;
const app = express();
const db = require('./config/mongoose');
const expressLayout = require('express-layouts');

app.use(express.static('./assets'));
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.urlencoded());

app.use('/', require('./routes/index'));

app.listen(port, err => {
    if(err){ console.log('Error in running the server'); return}
    console.log('Server is up and running on port: ', port);
})