'use strict'
var React = require('react');
var DateFormat=require('../common/dateformat')

module.exports = React.createClass({
  displayName: 'Icon',
  render: function () {
    var movie = this.props.data;
    var date = new Date(movie.updatedate);
    return (
      <div className="logo">
        <img src={movie.logo} width="100" height="70" />
        <span>{DateFormat(movie.updatedate,'yyyy-MM-dd')}</span>
      </div>
    );
  }
});