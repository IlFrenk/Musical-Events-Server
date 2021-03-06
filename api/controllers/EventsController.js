/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

    _config: {
        actions: true,
        shortcuts: true,
        rest: true
    },

baseEvents: (req, res) => {
    Events.find().exec( (err, events) => {
        return res.view('eventi',{eventi: events});
    });
},

baseEventsOrg: (req, res) => {
    Events.find().exec( (err, events) => {
        return res.view('eventiorg',{eventiOrg: events});
    });
}

};
