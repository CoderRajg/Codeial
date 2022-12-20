const mongoose  = require("mongoose");

// mongoose.connect("mongodb://localhost/codeial_development");
mongoose.connect('mongodb://localhost/codeial_user', { useUnifiedTopology: true, family: 4, useNewUrlParser: true }).
  then(() => console.log('Successfully Connected to Database')).
  catch(err => console.log('Caught', err.stack));

const db = mongoose.connection;

module.exports = db;