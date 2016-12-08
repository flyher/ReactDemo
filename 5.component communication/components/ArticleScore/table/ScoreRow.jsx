'use strict'
var DateFormat = require('../../../lib/common/dateformat');
module.exports = React.createClass({
  displayName: 'ScoreRow',
  getInitialState: function () {
    return null;
  },
  render: function () {
    var scoreshtml = this.props.dataSource.map(function (obj) {
      return (
        // react-with-addons.js:5283Warning: Each child in an array or iterator should have a unique "key" prop. Check the top-level render call using <tbody>. See https://fb.me/react-warning-keys for more information. in tr
        <tr key={obj.id}>
          <td>{obj.id}</td>
          <td>{obj.title}</td>
          <td>{obj.author}</td>
          <td>{obj.gender}</td>
          <td>{obj.score}</td>
          <td>{DateFormat(obj.date, 'yyyy-MM-dd')}</td>
        </tr>
      )
    });
    return <tbody>{scoreshtml}</tbody>
  }
});