const Event = require("../models/events");

function getAllEvents() {
  return Event.find({});
}

// Para crear una boda, verificar si está correcta la función
function createEvent(eventData) {
  const eventData = {
    eventType,
    eventNAmeHost1,
    eventNAmeHost2,
    eventDate,
    eventLocation,
    eventDressCode,
    eventNumInvitee,
  };
  return Event.create({
    eventType,
    eventNAmeHost1,
    eventNAmeHost2,
    eventDate,
    eventLocation,
    eventDressCode,
    eventNumInvitee,
  });
}
function getById(idEvent) {
  return Event.findById(idEvent).populate("eventOrganizer");
}
function patchById(idEvent, dataEvent) {
  return Event.findByIdAndUpdate(idEvent, dataEvent, { new: true });
}
function deleteById(idEvent) {
  return Event.findByIdAndDelete(idEvent);
}

module.exports = { getAllEvents, createEvent, getById, patchById, deleteById };

// Investigar el tema de paginación
