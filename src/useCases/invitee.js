const Invetee = require("../models/eventinvitees");
const Event = require("../models/events");

// aclarar dudas del post signup invitee

function postInviteeById(idInvitee, dataToUpdate) {
  return idInvitee.findByIdAndUpdate(idInvitee, dataToUpdate, { new: true });
}

function patchInviteeById(idInvitee, dataToUpdate) {
  return idInvitee.findByIdAndUpdate(idInvitee, dataToUpdate, { new: true });
}
// aun en discucion si el invitado se puede autoeliminar 
function deleteInviteeById(idInvitee) {
  return Invitee.findByIdAndDelete(idInvitee);
}


async function loginInvitee(idInvitee, email, password) {
  const inviteeFound = await Invitee.findOne({ email, idInvitee, password });
  if (!writerFound) throw new Error("Invalid credentials");

  const isValidPassword = await bcrypt.compare(password, inviteeFound.password);
  if (!isValidPassword) throw new Error("Invalid credentials");

  // regresar
  return jwt.sign({ id: inviteeFound._id });
}

module.exports = { loginInvitee,
  deleteInviteeById,
  patchInviteeById
 };

 