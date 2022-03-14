const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventOrganizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organizer",
  },
  eventType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "typesEvents",
    required: true,
  },
  eventNAmeHost1: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  eventNAmeHost2: {
    type: String,
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  eventDate: {
    type: Date,
    default: Date.now,
  },
  eventLocation: {
    adress1: {
      type: String,
      required: true,
    },
    adress2: {
      type: String,
    },
    city: {
      type: String,
    },
    lat: {
      type: String,
    },
    long: {
      type: String,
    },
  },
  eventDressCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "typesDressCode",
    required: true,
  },
  eventNumInvitee: {
    type: Number,
    required: true,
    min: 2,
    max: 500,
  },
});

const model = mongoose.model("events", eventSchema);
module.exports = model;
