var path = require("path");
var express = require("express");
var bodyParser = require('body-parser');


var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

app.use(function (req, res) {
 res.setHeader('Content-Type', 'text/plain')
 res.write('you posted:\n')
 res.end(JSON.stringify(req.body, null, 2))
});

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
});