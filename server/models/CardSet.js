import mongoose, { Schema } from 'mongoose';
import cardSchema from './Card';

const { ObjectId } = mongoose.Schema.Types;

const setSchema = new Schema({
  cards: [cardSchema],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  score: Number, // score % of (sure+1, unsure/hint+0.5, unknown+0)
  timeSpent: Number, // ms, spent on set
  _user: {
    type: ObjectId,
    ref: 'User',
  },
});

const CardSet = mongoose.model('cardsets', setSchema); // model class (Mongoose)

export default CardSet;
