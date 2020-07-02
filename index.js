const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');
const cookieParser = require('cookie-parser');
// used for session cookie
const session = require('express-session');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
// Custom Middleware
const customMware = require('./config/middleware'); 



app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
})); 


app.use(express.urlencoded());

app.use(cookieParser());

// assets
app.use(express.static('./assets'));

// extract styles and scripts from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(expressLayouts);  // before routes as views will be used in it to render

// Setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'env.session_cookie_key',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
}));

app.use(flash());
app.use(customMware.setFlash);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// use express router
app.use('/', require('./routes'));


app.listen(8000, (err) => {
    if (err) { console.log(`Error in running the server: ${err}`); return }

    console.log('Server is running on port 8000');
})