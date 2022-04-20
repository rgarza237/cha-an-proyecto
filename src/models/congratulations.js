const mongoose = require ('mongoose') 
const inviteeCongratulations = new mongoose.Schema({
    nameInvitee: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
      },
      congratulationMessage: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 2000,
        trim: true,
      },
})

const model = mongoose.model("invitee", inviteeSchema);
module.exports = model;