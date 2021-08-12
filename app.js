const express = require('express');
const app = express();
const PORT = 1337;
const route = require('./routes/route');
const morgan = require('morgan');


app.listen(PORT, ()=>{
  console.log(`connection to localholst ${PORT}`);
});

app.use('/', (route));
//morgan logs the middleware
app.use(morgan('banana'));
//serves static files from public folder inside directory name
app.use((express.static(__dirname + "/public")));
//parses encoded request into req.body
app.use(express.urlencoded({ extended: false }));

module.exports = app;
