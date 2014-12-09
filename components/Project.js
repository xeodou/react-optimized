var React = require('react');
var AppActionCreator = require('../actions/AppActionCreator');

var Project = React.createClass({

  displayName: 'Project',

  getInitialState: function () {
    return {
      renderCount: 0
    };
  },

  componentWillReceiveProps: function (nextProps) {
    var i = this.state.renderCount;
    i++;
    this.setState({
      renderCount: i
    });
  },

  handShowClick: function (e) {
    e.preventDefault();
    AppActionCreator.showMessage('This a message')
  },

  handHiddenClick: function(e) {
    e.preventDefault();
    AppActionCreator.hiddenMessage();
  },

  render: function () {
    return (
      <div >
        <button onClick={this.handShowClick}>Show Message</button>
        {'Render ' + this.state.renderCount + ' times'}
        <button onClick={this.handHiddenClick}>Hidden Message</button>
      </div>
    );
  }

});

module.exports = Project;
