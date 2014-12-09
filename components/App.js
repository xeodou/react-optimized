var React = require('react');
var AppStore = require('../stores/AppStore');
var Message = require('./Message');
var Project = require('./Project');

var App = React.createClass({

  displayName: 'App',

  getInitialState: function () {
    return AppStore.get();
  },

  componentWillMount: function () {
    AppStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function () {
    AppStore.removeChangeListener(this.onChange);
  },

  onChange: function () {
    this.setState(AppStore.get());
  },

  render: function () {
    return (
      <div>
        <Message {...this.state.message}/>
        <Project />
      </div>
    );
  }

});

module.exports = App;
