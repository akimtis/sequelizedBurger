
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var routes = require("./controllers/burgers_controller.js");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

// middleware

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(methodOverride("_method"));

// routes
app.use("/", routes);

app.listen(PORT, function(){
  console.log("listening on port" + PORT);
})