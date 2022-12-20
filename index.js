const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
const port = 7000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy')

app.use(express.urlencoded());

app.use(cookieparser());

app.use(express.static('./assets'))

app.use(expressLayouts);

//extract styles and scripts from sub pages to layout
app.set('layout extractStyles', true);
app.set('layout extractScipts', true);



//use express router
app.use('/',require('./routes'));


app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})

