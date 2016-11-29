'use strict'
var React = require('react');
var Info = require('./info');
var Icon = require('./icon');
module.exports = React.createClass({
  displayName: 'Box',
  render: function () {
    return (
      <div className='box'>
        <Icon></Icon>
        <Info></Info>
      </div>
    );
  }
}); 