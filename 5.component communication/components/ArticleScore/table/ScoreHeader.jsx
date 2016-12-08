'use strict'
// var React = require('react');
module.exports = React.createClass({
  displayName: 'ScoreHeader',
  render: function () {
    return (
      <thead>
        <tr>
          <th>编号</th>
          <th>标题</th>
          <th>作者</th>
          <th>性别</th>
          <th>得分</th>
          <th>发布日期</th>
        </tr>
      </thead>
    )
  }
});