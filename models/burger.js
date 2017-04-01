var Sequelize = require('sequelize');
var db = require("../config/config.js");


var Burger = db.define("Burger", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0
  }

}, {
  timestamps: false,
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
});

Burger.sync();

module.exports = Burger;

// Syncs with DB

// Burger.sync({force: true}).then(function () {
//   // Table created
//   return Burger.create({
//     burger_name: 'The Western',
//     devoured: false
//   }).then(function(){
//   console.log("added first burger");
//   });
// });



// Makes the Band Model available for other files (will also create a table)


// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },


// db.Burger.create ({
//   burger_name: "The Western",
//   devoured: true
// }).then(function(){
//   console.log()
// });


//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };



