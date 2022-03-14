const mongoose = require("mongoose");

const typesDressCodeSchema = new mongoose.Schema({
  formal: {
    type: String,
  },
  informal: {
    type: String,
  },
  casual: {
    type: String,
  },
  business: {
    type: String,
  },
  coktail: {
    type: String,
  },
});

const model = mongoose.model("typesEvents", typesDressCodeSchema);
module.exports = model;
