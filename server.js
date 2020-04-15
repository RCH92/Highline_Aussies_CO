process.env.PWD = process.cwd();
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var path = require('path');
var PORT= process.env.PORT || 5000;

// Ejs
// ================================================================================================
// app.use('/css', express.st??atic(path.join(__dirname, '/public/css')));
app.use('/css', express.static(path.join(process.env.PWD, '/public/css')));
app.use(expressLayouts);
app.use(express.json());
app.set('view engine', 'ejs');


// app.use('/images', express.static(__dirname + '/public/images'));
// app.use('/js', express.static(__dirname + '/public/js'));
// app.use('/files', express.static(__dirname + '/public/files'));



// app.use(express.static(__dirname + '/public'));

// app.use('/jquery', express.static('node_modules/jquery/dist'));
// app.use('/whatInput', express.static('node_modules/what-input/dist'));
// app.use('/foundation', express.static('node_modules/foundation-sites/dist'));
app.use('/', require(__dirname + '/routes/html-routes'));

// app.use('/public', express.static('./public'));


// require("./routes/api-routes.js")(app);




app.listen(PORT, console.log("server start on " + PORT));