const Event = require("../models/events");

function getAllEvents() {
  return Event.find({});
}

// Para crear una boda, verificar si está correcta la función
function createEvent(eventData) {
  const {
    eventType,
    eventName,
    eventNameHost1,
    eventNameHost2,
    eventDate,
    eventInvitation,
    eventLocation,
    eventDressCode,
    eventNumInvitee,
  } = eventData;
  return Event.create({
    eventType,
    eventName,
    eventNameHost1,
    eventNameHost2,
    eventDate,
    eventInvitation,
    eventLocation,
    eventDressCode,
    eventNumInvitee,
  });
}
function getById(idEvent) {
  return Event.findById(idEvent);
}
function patchById(idEvent, dataEvent) {
  return Event.findByIdAndUpdate(idEvent, dataEvent, { new: true });
}
function deleteById(idEvent) {
  return Event.findByIdAndDelete(idEvent);
}

module.exports = { getAllEvents, createEvent, getById, patchById, deleteById };

// Investigar el tema de paginación
