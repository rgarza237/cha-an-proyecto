const Event = require("../models/events");

function getAllEvents() {
  return Event.find({});
}

module.exports = { getAllEvents };

// Investigar el tema de paginación
