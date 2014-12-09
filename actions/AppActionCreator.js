var AppConstants = require('../constants/AppConstants');
var ActionTypes = require('../constants/AppConstants').ActionTypes;
var AppDispatcher = require('../dispatchers/AppDispatcher');

var AppActionCreator = {

  showMessage: function (data) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.SHOW_MESSAGE,
      data: data
    });
  },

  hiddenMessage: function (data) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.HIDDEN_MESSAG
    });
  }

};

module.exports = AppActionCreator;
