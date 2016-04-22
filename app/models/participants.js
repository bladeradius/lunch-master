var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ParticipantSchema = new Schema({
  name: {type: String, unique: true}
});

mongoose.model('Participant', ParticipantSchema);
