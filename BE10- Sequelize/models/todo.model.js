"use strict"

/*------------------------*/
// Models :  
// Sequelize:

  const { Sequelize, DataTypes } = require('sequelize');

  // sequelize instance :
  const sequelize = new Sequelize ('sqlite:' + process.env.SQLITE)

// define method aims to create model 
  const Todo = sequelize.define ('todos', {
     // We dont need to define the id field, sequelize will create it automatically
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false, // default : true 
    //   unique: true, // default : false 
    //   comment: 'description',
    //   primaryKey: true, // default : false
    //   autoIncrement: true, // default : false
      // field: 'id', // default : name of the attribute  
    //   defaultValue: 'default', // default : null
  
    // }
    title :{
      type : DataTypes.STRING(256),
      allowNull : false,
    },
    description:{
      type : DataTypes.STRING,
    },
    // -1: Low, 0: Normal, 1:High
    priority:{
      type : DataTypes.TINYINT,
      allowNull : false,
      defaultValue : 0,
    },
    isDoneCustom:{
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : false,
    }
    // No need to define createdAt and updatedAt fields, sequelize will create them automatically
  })

  /* Sync the model with the database */
  // This needs to be done only once, when you create the model
  // sequelize.sync()

  // Connect to the database
  sequelize.authenticate()
  .then(() => console.log('Connected to the database'))
  .catch(() => console.error('Unable to connect to the database:'));

  module.exports = Todo