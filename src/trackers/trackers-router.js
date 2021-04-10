const express = require('express');
const path = require('path');
const TrackersService = require('./trackers-service');

const trackersRouter = express.Router();
const jsonParser = express.json();

trackersRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    TrackersService.getAllTrackers(knexInstance)
      .then(trackers => {
        res.json(trackers.map(tracker => TrackersService.serializeTracker(tracker)))
      })
      .catch(next)
  })

  module.exports = trackersRouter;