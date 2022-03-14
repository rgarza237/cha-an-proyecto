const mongoose = require("mongoose");

const typesEventsSchema = new mongoose.Schema({
  wedding: {
    type: String,
  },
  birthday: {
    type: String,
  },
  christening: {
    type: String,
  },
  babyShower: {
    type: String,
  },
});

const model = mongoose.model("typesEvents", typesEventsSchema);
module.exports = model;
