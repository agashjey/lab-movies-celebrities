// Iteration #1
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');  
const index = require('../db/index');

const celebrities = [];


const seedDB = async () => {
  await Celebrity.deleteMany();
  try{ 
    await Celebrity.create(celebrities);
        console.log(`There are ${celebrities.length} celebrities in the database !`)
  } catch(error) {
    console.error(error);
  }
};

seedDB().then(() => {
    mongoose.connection.close();
});