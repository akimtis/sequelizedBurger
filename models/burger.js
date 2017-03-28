var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");



var Burger = sequelize.define("Burger", {
  burger_name: DataTypes.STRING,
  devoured: DataTypes.BOOLEAN
}, {
  timestamps: false,
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
});
  

// Syncs with DB
Burger.sync();

// Makes the Band Model available for other files (will also create a table)
module.exports = Burger;

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

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;
