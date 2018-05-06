import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: String,
  avatarUrl: String,
  lastStudied: Date,
  lastSetFolder: String, // last set/folder title
});

const User = mongoose.model('user', userSchema);

export default User;
