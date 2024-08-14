// src/controllers/eventController.js
import Event from '../models/eventModel.js';

// Function to handle event creation
export const createEvent = async (req, res) => {
    try {
        const {
            eventTitle,
            eventDescription,
            speakerName,
            aboutSpeaker,
        } = req.body;
        const eventPhoto = req.files && req.files['eventPhoto'] && req.files['eventPhoto'][0] && req.files['eventPhoto'][0].path;
        const speakerPhoto = req.files && req.files['speakerPhoto'] && req.files['speakerPhoto'][0] && req.files['speakerPhoto'][0].path;

 console.log(eventPhoto);
 console.log(speakerPhoto);
 console.log(req.file);
 
 
        if (!eventPhoto || !speakerPhoto) {
            return res.status(400).send({ message: 'Event photo and Speaker photo are required' });
        }

        const eventData = new Event({
            eventPhoto,
            eventTitle,
            eventDescription,
            speakerName,
            speakerPhoto,
            aboutSpeaker,
        });

        await eventData.save();

        res.status(201).send({ message: 'Event created successfully', data: eventData });
    } catch (error) {
        res.status(400).send({ message: 'Error creating event', error: error.message });
    }
};



// Function to handle event update
export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { eventTitle, eventDescription, speakerName, aboutSpeaker } = req.body;
        const eventPhoto = req.files && req.files['eventPhoto'] ? req.files['eventPhoto'][0].path : null;
        const speakerPhoto = req.files && req.files['speakerPhoto'] ? req.files['speakerPhoto'][0].path : null;

        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).send({ message: 'Event not found' });
        }

        if (eventTitle) event.eventTitle = eventTitle;
        if (eventDescription) event.eventDescription = eventDescription;
        if (speakerName) event.speakerName = speakerName;
        if (aboutSpeaker) event.aboutSpeaker = aboutSpeaker;
        if (eventPhoto) event.eventPhoto = eventPhoto;
        if (speakerPhoto) event.speakerPhoto = speakerPhoto;

        await event.save();

        res.status(200).send({ message: 'Event updated successfully', data: event });
    } catch (error) {
        res.status(400).send({ message: 'Error updating event', error: error.message });
    }
};

// Function to handle event deletion
export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const event = await Event.findByIdAndDelete(id) ;

        if (!event) {
            return res.status(404).send({ message: 'Event not found' });
        }



        res.status(200).send({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(400).send({ message: 'Error deleting event', error: error.message });
    }
};

// Function to get all events
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find(); // Get all events from the database
        res.status(200).json(events);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving events', error: error.message });
    }
};

 //singleeeeeeeeee
 export const getEventById = async (req, res) => {
    try {
      const { id } = req.params;
      const event = await Event.findById(id);
  
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      res.json(event);
    } catch (error) {
      console.error('Error fetching event:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };