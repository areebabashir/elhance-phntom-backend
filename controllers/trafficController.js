import Traffic from '../models/trafficModel.js';

export const getTrafficData = async (req, res) => {
  try {
    const trafficData = await Traffic.find();
    const visitorsData = trafficData.map(data => data.visitors);
    const pageViewsData = trafficData.map(data => data.pageViews);
    const labels = trafficData.map(data => new Date(data.date).toLocaleDateString());

    res.status(200).json({
      labels,
      data: [visitorsData, pageViewsData],
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const addTrafficData = async (req, res) => {
  const { visitors, pageViews, date } = req.body;

  try {
    const newTrafficData = new Traffic({
      visitors,
      pageViews,
      date,
    });

    const savedTrafficData = await newTrafficData.save();
    res.status(201).json(savedTrafficData);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
