const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Statistics = new Schema(
  {
    totalRequest: {
      type: Number,
      default: 0,
    },

    dailyRequest: {
      type: Number,
      default: 0,
    },

    dailyRequests: [
      {
        _id: false,

        date: {
          type: Date,
          default: Date.now,
        },

        request: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Statistics", Statistics);
