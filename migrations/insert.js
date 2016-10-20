'use strict';

// Require our models
var models = require("../models");

var sequelize = require('../models').sequelize;

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return models.Burger.bulkCreate(
      [
        {burger_name: "turkey", devoured: false},
        {burger_name: "veggie", devoured: false},
        {burger_name: "chips", devoured: false},
        {burger_name: "ham", devoured: false}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    
    return models.Burger.destroy({where:{burger_name: [
        "turkey",
        "veggie",
        "chips",
        "ham"
        ]}})
    .then(function() {
      // console.log(sequelize.query('SELECT LAST_INSERT_ID()'));

       return sequelize.query('ALTER TABLE burgers AUTO_INCREMENT=1');
    })
  }
};