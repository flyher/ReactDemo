'use strict'
var React = require('react');

module.exports = React.createClass({
  displayName: 'Panel',
  render: function () {
    return (
      <div className='row'>
        <div className='col-sm-4'>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Panel title</h3>
            </div>
            <div className="panel-body">
              Panel content
            </div>
          </div>
        </div>
      </div>
    );
  }
});