const EventInvitees = require("../models/congratulations");


function createCongratulations(nameInvitee, congratulationMessage) {
    const { congratulationMessage } = inviteeCongratulations;
    return EventInvitees.create({ congratulationMessage });
  }

  module.exports = {
createCongratulations
  }