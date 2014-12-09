var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var App = {
  message: {}
};

function showMessage(data) {
  if (typeof data === 'string') {
    data = {
      content: data,
      hidden: false
    }
  }
  App.message = data;
}

function hiddenMessage() {
  App.message.hidden = true;
}

var AppStore = assign({}, EventEmitter.prototype, {

  get: function () {
    return App;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

});

AppStore.dispatchToken = AppDispatcher.register(function (payload) {
  var action = payload.action;
  switch (action.type) {
  case ActionTypes.SHOW_MESSAGE:
    showMessage(action.data);
    return AppStore.emitChange();
  case AppConstants.HIDDEN_MESSAG:
    hiddenMessage();
    return AppStore.emitChange();
  }
});

module.exports = AppStore;
