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

const Card = mongoose.model('card', cardSchema);

export default Card;
