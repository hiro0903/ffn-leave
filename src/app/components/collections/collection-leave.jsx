var Backbone = require('backbone');
var LeaveModel = require('../models/model-leave.jsx');


var LeaveCollection = Backbone.Collection.extend({
    model : LeaveModel
});


module.exports = LeaveCollection;