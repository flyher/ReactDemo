'use strict'
// var React = require('react');
var ScoreHeader = require('./ScoreHeader');
var ScoreTable = require('./ScoreRow');
module.exports = React.createClass({
  displayName: 'MainTable',
  render: function () {
    return (
      <table className="table table-striped">
        <ScoreHeader></ScoreHeader>
        <ScoreTable dataSource={this.props.dataSource}></ScoreTable>
      </table>
    )
  }
});
