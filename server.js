var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var PORT= process.env.PORT || 5000;

// Ejs
// ================================================================================================

app.use(expressLayouts);
app.set('view engine', 'ejs');

// require("./routes/api-routes.js")(app);

app.use(express.json());

app.use(express.static(__dirname + '/public'));
// app.use('/public', express.static('./public'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/whatInput', express.static('node_modules/what-input/dist'));
app.use('/foundation', express.static('node_modules/foundation-sites/dist'));
app.use('/', require(__dirname + '/routes/html-routes'));

app.listen(PORT, console.log("server start on " + PORT));