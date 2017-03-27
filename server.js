
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

// *** Dependencies
// =============================================================
var express = require("express");
var db = require("./models")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;



// routes
app.use("/", routes);



db.sequelize.sync().then(function() {
  validate: { force: true },
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});