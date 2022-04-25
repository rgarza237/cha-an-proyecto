const EventInvitees = require("../models/eventInvitees");

function getAllInvitees() {
  return EventInvitees.find({});
}
function getInviteeById(idInvitee) {
  return EventInvitees.findById(idInvitee).populate("idEvent");
}

function postInviteeById(idInvitee, dataToUpdate) {
  return idInvitee.findByIdAndUpdate(idInvitee, dataToUpdate, { new: true });
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

async function loginInvitee(idInvitee, email, password) {
  const inviteeFound = await Invitee.findOne({ email, idInvitee, password });
  if (!writerFound) throw new Error("Invalid credentials");

  const isValidPassword = await bcrypt.compare(password, inviteeFound.password);
  if (!isValidPassword) throw new Error("Invalid credentials");

  // regresar
  return jwt.sign({ id: inviteeFound._id });
}

module.exports = {
  getAllInvitees,
  getInviteeById,
  createInvitee,
  updateById,
  deleteById,
  loginInvitee,
  postInviteeById,
};
