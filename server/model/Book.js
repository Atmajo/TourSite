import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Book = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: [true, "Email Exist"],
  },
  contact: {
    type: Number,
    require: true,
  },
  place: {
    type: String,
    require: true,
  },
  noAdults: {
    type: String,
    require: true,
  },
  noChild: {
    type: String,
    require: true,
  },
  days: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Book", Book);
