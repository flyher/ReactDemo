'use strict'
var React = require('react');
module.exports = React.createClass({
  displayName: 'RefreshButton',
  refresh: function () {
    // console.log(this);
    // $.get("http://localhost:43286/Movie/getnewlist", function (result) {
    //   var movies = JSON.parse(result).data;
    //   this.setState({
    //     movies: movies
    //   });
    //   console.log(this);
    //   // if (this.isMounted()) {
    //   // }
    // }.bind(this));
    // 关于refresh的实现，将会在下一章解决。
  },
  render: function () {
    return (
      <button type="button" key="refreshbutton" data={this.props.data} className="btn btn-xs btn-info" onClick={this.refresh}>Refresh</button>
    );
  }
});
