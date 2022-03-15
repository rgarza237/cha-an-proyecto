const adressSchema = new mongoose.adressSchema({
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
});

module.exports = adressSchema;
