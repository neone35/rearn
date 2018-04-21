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
});

const User = mongoose.model('User', userSchema);

export default User;
