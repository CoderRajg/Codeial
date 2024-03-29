const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
const port = 5556;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
// const sassMiddleware = require('node-sass-middleware');

//extract styles and scripts from sub pages to layout
app.set('view engine','ejs');
app.set('views','./views');

app.set('layout extractStyles', true);
app.set('layout extractScipts', true);

app.use(express.urlencoded());

app.use(cookieparser());

app.use(express.static('./assets'));

app.use(expressLayouts);


//mongo store is used to store session in cookie
app.use(session({
    name: 'codeial',
    //to do letter because the key would be unique and not shared with anyone
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: MongoStore.create(
        {
            // mongooseConnection: db,
            mongoUrl: 'mongodb://localhost/codeial_user',
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect mongodb setup ok!');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});