var Backbone = require('backbone');

var Constants = require('../../config').Leave;

var LeaveData = Backbone.Model.extend({
    defaults : {
        state : Constants.STATE_DEFAULT
    },

    approve : function (option) {
        this.set({
            state : Constants.STATE_APPROVED,
            approved_by : option.userId
        })
    }
});

module.exports = LeaveData;