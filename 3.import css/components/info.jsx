'use strict'
var React = require('react');
module.exports = React.createClass({
  displayName: 'Info',
  render: function () {
    return (
      <div className='info'>
        <div className='title'>Customer Support</div>
        <div className='describe'>Lorem ipsum dolor sit amet, consectetur adip.</div>
      </div>
    );
  }
});