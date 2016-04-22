var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LunchSchema = new Schema({
  title: String,
  location: String,
  date: Date,
  participants: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Participant'  
  }],
  protestors: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Participant'  
  }]
});

mongoose.model('Lunch', LunchSchema);
