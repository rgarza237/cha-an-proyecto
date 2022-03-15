const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventOrganizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organizer",
  },
  eventType: {
    type: String,
    required: true,
    trim: true,
    enum: ["wedding", "birthday", "christening", "babyShower"],
    default: "wedding",
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
    required: true,
    trim: true,
  },
  eventLocation: adressSchema,
  eventDressCode: {
    type: String,
    enum: ["formal", "informal", "casual", "business", "coktail"],
    default: "formal",
    required: true,
    trim: true,
  },
  eventNumInvitee: {
    type: Number,
    required: true,
    min: 2,
    max: 500,
    trim: true,
  },
});

const model = mongoose.model("events", eventSchema);
module.exports = model;
