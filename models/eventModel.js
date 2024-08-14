import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventPhoto: {
    type: String, // URL of the event photo
    required: true
  },
  eventTitle: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true
  },
  eventDescription: {
    type: String,
    required: [true, 'Event description is required'],
    trim: true
  },
  speakerName: {
    type: String,
    required: [true, 'Speaker name is required'],
    trim: true
  },
  speakerPhoto: {
    type: String, // URL of the speaker photo
    required: true
  },
  aboutSpeaker: {
    type: String,
    required: [true, 'About speaker is required'],
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;

