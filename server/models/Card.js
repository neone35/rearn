import mongoose, { Schema } from 'mongoose';

const cardSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  hint: String,
});

mongoose.model('cards', cardSchema); // model class (Mongoose) = collection (MongoDB)

export default cardSchema;
