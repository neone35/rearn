import mongoose, { Schema } from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const folderSchema = new Schema({
  setIds: [ObjectId],
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  score: Number, // set scores sum / setIds count
  timeSpent: Number, // set ms sum / setIds count
  _user: {
    type: ObjectId,
    ref: 'User',
  },
});

mongoose.model('setfolders', folderSchema);
