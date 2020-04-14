const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT= process.env.PORT || 5000;

// Ejs
// ================================================================================================


app.set('view engine', 'ejs');
app.use(expressLayouts);
// require("./routes/api-routes.js")(app);

// app.use(express.json());

app.use(express.static(__dirname + '/public'));
// app.use('/public', express.static('./public'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/whatInput', express.static('node_modules/what-input/dist'));
app.use('/foundation', express.static('node_modules/foundation-sites/dist'));
// app.use('/json', express.static('public/thumbnails.json'));

app.use('/', require(__dirname + '/routes/html-routes'));

app.listen(PORT, console.log("server start on " + PORT));