const xss = require('xss');

const TrackersService = {
  validateTrackers(TrackerId) {
    if(isNaN(trackerId)) {
      return 'Id is incorrect.'
    }
    return null
  },
  getAllTrackers(knex) {
    return knex.select('*').from('trackers')
  },
  serializeTracker(tracker) {
    return {
      id: tracker.id,
      name: xss(tracker.name),
      counter: tracker.counter,
      image: xss(tracker.image),
      trackTime: tracker.trackTime,
    }
  }
}

module.exports = TrackersService;