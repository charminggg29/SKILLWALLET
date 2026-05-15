const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: ''
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: 'users',
    versionKey: false
  }
);

module.exports = mongoose.model('User', userSchema);

