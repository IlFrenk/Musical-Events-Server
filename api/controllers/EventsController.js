/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  baseEvents: (req, res) => {
      Events.find().exec( (err, events) => {
          return res.view('eventi',{eventi: events});
      });
  },

  baseEventsOrg: (req, res) => {
      Events.find().exec( (err, events) => {
          return res.view('eventiOrg',{eventiOrg: events});
      });
  },

  addEvents: (req, res) => {
          return res.view('addEvento');
  }
};