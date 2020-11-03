const { Schema, model } = require('mongoose');

const oppdragSchema = new Schema(
  {
    tittel: {
      type: String,
      required: [true, 'tittel field is required'],
    },
    beskrivelse: {
      type: String,
      required: [true, 'beskrivelse field is required'],
    },
    ferdig: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  { timestamps: true },
);

module.exports = model('oppdrag', oppdragSchema);
