const Invetee = require("../models/eventinvitees");
const Event = require("../models/events");
// aclarar dudas del post signup invitee

function getById(idEvent) {
  return Event.findById(idEvent).populate("eventOrganizer");
}

function getInviteeById(idInvitee) {
  return EventInvitees.findById(idInvitee).populate("idEvent");
}

function postAssistanceById(idInvitee, dataToUpdate) {
  return idInvitee.findByIdAndUpdate(idInvitee, dataToUpdate, { new: true });
}

function patchAssistanceById(idInvitee, dataToUpdate) {
  return idInvitee.findByIdAndUpdate(idInvitee, dataToUpdate, { new: true });
}

module.exports = {
  patchInviteeById,
  getInviteeById
 };

 