import mongoose from 'mongoose';

const trafficSchema = new mongoose.Schema({
  visitors: {
    type: Number,
    required: true,
  },
  pageViews: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Traffic = mongoose.model('Traffic', trafficSchema);

export default Traffic;
