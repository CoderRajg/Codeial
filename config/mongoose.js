// const mongoose  = require("mongoose");

// // mongoose.connect("mongodb://localhost/codeial_development");
// mongoose.connect('mongodb://localhost:27017/codeial_user', { useUnifiedTopology: true, family: 4, useNewUrlParser: true }).
//   then(() => console.log('Successfully Connected to Database')).
//   catch(err => console.log('Caught', err.stack));

// const db = mongoose.connection;

// module.exports = db;
// const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
// mongoose.connect('mongodb://127.0.0.1:27017/codeial_user');
// const uri = "mongodb://0.0.0.0:27017";
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);

// const db = mongoose.connection

// db.on('error', console.error.bind(console, 'error connecting to database'));

// db.once('open', ()=>{
//     console.log("successfully connected to database : mongoDB");
// });
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db('codeial_user');
  // const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

module.exports = client;