var keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    // Repo
    SHOW_MESSAGE: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
