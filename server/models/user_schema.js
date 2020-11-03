const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name field is required'],
    },
    experience: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = model('user', userSchema);
