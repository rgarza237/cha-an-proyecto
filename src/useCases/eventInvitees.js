const EventInvitees = require("../models/eventInvitees");

function getAllInvitees() {
  return EventInvitees.find({});
}
function getInviteeById(idInvitee) {
  return EventInvitees.findById(idInvitee).populate("idEvent");
}
function createInvitee(inviteeData) {
  const { nameInvitee, emailInvitee } = inviteeData;
  return EventInvitees.create({ nameInvitee, emailInvitee });
}
function updateById(idInvitee, dataUpdate) {
  return EventInvitees.findByIdAndUpdate(idInvitee, dataUpdate, { new: true });
}
function deleteById(idInvitee) {
  return EventInvitees.findByIdAndDelete(idInvitee);
}

module.exports = {
  getAllInvitees,
  getInviteeById,
  createInvitee,
  updateById,
  deleteById,
};
