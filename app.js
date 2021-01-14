var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(process.env.PORT || 3300, process.env.IP, function() {
    console.log("The Website Has Started");
});