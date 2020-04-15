var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var PORT= process.env.PORT || 5000;

// Ejs
// ================================================================================================



// app.use(express.static(__dirname + '/public'));
app.use('/css', express.static('./public/css'));
app.use('/images', express.static('./public/images'));
app.use('/js', express.static('./public/js'));
app.use('/files', express.static('./public/files'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/whatInput', express.static('node_modules/what-input/dist'));
app.use('/foundation', express.static('node_modules/foundation-sites/dist'));
app.use(expressLayouts);
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/', require(__dirname + '/routes/html-routes'));

// app.use('/public', express.static('./public'));


// require("./routes/api-routes.js")(app);




app.listen(PORT, console.log("server start on " + PORT));