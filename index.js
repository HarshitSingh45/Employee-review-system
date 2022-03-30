const express = require('express');
const port =8000;
const app = express();
const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    /* Options */
    src: './assets/scss'
  , dest: './assets/styles'
  , debug: true
  , outputStyle: 'extended'
  , prefix: '/styles'
}));
app.use(express.static('./assets'));

app.use(expressLayout);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(session({
    name: 'ERS',
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(db)
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.isAuthenticatedUser);

app.use('/', require('./routes/index'));

app.listen(port, err => {
    if(err){ console.log('Error in running the server'); return}
    console.log('Server is up and running on port: ', port);
})