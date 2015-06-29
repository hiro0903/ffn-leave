var Backbone = require('backbone');

var Constants = require('../../config').Leave;

var LeaveData = Backbone.Model.extend({
		defaults : {
				id             : 0,     //int leave form id
				user_id        : 0,     //int
				leave_type_id  : 0,     //int
				work_date      : null,  //date 要顯示的休假日
				start_datetime : null,  //datetime
				stop_datetime  : null,  //datetime
				status_id      : 0,
				app_id         : 0      //用來判斷是否跟多個假單合併顯示
		},

});

module.exports = LeaveData;
/*
[
  {  id : leave_id, user_id, leave_type_id, work_date,   app_id  }


]
*/