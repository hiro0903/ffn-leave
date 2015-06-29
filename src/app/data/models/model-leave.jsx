var Backbone = require('backbone');

var LeaveModel = Backbone.Model.extend({
		defaults : {
				app_id         : 0,     //application form id, 進行action的基本單位
				id             : 0,     //int leave form id
				user_id        : 0,     //int owner
				leave_type_id  : 0,     //int 假別
				work_date      : null,  //date 顯示的休假日
				start_datetime : null,  //datetime
				stop_datetime  : null,  //datetime
				status_id      : 0,
		},

		 idAttribute: "id"

});

module.exports = LeaveModel;
/*
[
  {  id : leave_id, user_id, leave_type_id, work_date,   app_id  }


]
*/