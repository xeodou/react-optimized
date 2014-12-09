var React = require('react');

var Message = React.createClass({

  displayName: 'Message',

  getDefaultProps: function () {
    return {};
  },

  render: function() {
    return (
      <div hidden={this.props.hidden}>
        <span>{this.props.content}</span>
      </div>
    );
  }

});

module.exports = Message;
