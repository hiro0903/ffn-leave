module.exports = {
    logo : {
        src  : 'img/ffn_logo_2014_site.jpg',
        alt  : 'FriendFinder Network',
        title: '最愛CHRIS了 >.^'
    },

    createMenuList : [
      { type : 'leave',  permission : 'CREATE_LEAVE_FORM' }, 
      { type : 'event',  permission : 'CREATE_EVENT_FORM' }, 
      { type : 'notice', permission : 'CREATE_NOTICE'     }
    ],

    userMenuList : ['preference', 'logout']
};