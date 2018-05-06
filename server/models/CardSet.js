import mongoose, { Schema } from 'mongoose';
import Card from './Card';

const { ObjectId } = mongoose.Schema.Types;

const setSchema = new Schema({
  cards: [Card],
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

const CardSet = mongoose.model('cardset', setSchema);

export default CardSet;
