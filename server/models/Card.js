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

// example mongoose method
cardSchema.methods.findQuestions = function findQuestion(cb) {
  this.model('card').find({ question: this.question }, cb);
};

export default Card;
