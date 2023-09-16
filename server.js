const express = require('express');

const mongodb = require('./data/database');
const app = express();


app.use('/', require('./routes'));


mongodb.initDb((err) => {
   if (err) {
    console.log(err);
   } 
   else {
    app.listen(process.env.PORT || 3000);
    console.log('Database is listening and node running on port ' + (process.env.PORT || 3000));
   }

})

