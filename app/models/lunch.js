var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LunchSchema = new Schema({
  title: String,
  location: String,
  date: Date,
  participants: [{
    name: String  
  }],
  protestors: [{
    name: String,
    justification: String
  }]
});

mongoose.model('Lunch', LunchSchema);

