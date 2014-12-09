var React = require('react');
var AppStore = require('../stores/AppStore');

var Message = React.createClass({

  displayName: 'Message',

  getInitialState: function () {
    return AppStore.getMessage();
  },

  componentWillMount: function () {
    AppStore.addMessageChangeListener(this.onChange);
  },

  componentWillUnmount: function () {
    AppStore.removeMessageChangeListener(this.onChange);
  },

  onChange: function () {
    this.setState(AppStore.getMessage());
  },

  render: function() {
    return (
      <div hidden={this.state.hidden}>
        <span>{this.state.content}</span>
      </div>
    );
  }

});

module.exports = Message;
