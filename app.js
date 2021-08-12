const express = require('express');
const app = express();
const PORT = 3000;
const route = require('./routes/route');
const morgan = require('morgan');
const { db } = require('./models');



//Creates the connection to the database
db.authenticate().then(() => {
  console.log('Connected to the database')
})

const init = async () => {
  await db.sync({force:true})
  app.listen(PORT, ()=>{
    console.log(`connection to localhost ${PORT}`);
  });
}

init();


app.use('/', (route));
//morgan logs the middleware
app.use(morgan('banana'));
//serves static files from public folder inside directory name
app.use((express.static(__dirname + "/public")));
//parses encoded request into req.body
app.use(express.urlencoded({ extended: false }));

module.exports = app;
