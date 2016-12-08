'use strict'
var TitleFilter = require('./TitleFilter');
module.exports = React.createClass({
  displayName: 'MainFilter',
  getInitialState: function () {
    console.log();
    return null;
  },
  // onTitleParentChanged:function(event){
  //   console.log(event.target.value);
  // },
  render: function () {
    return (
      <div>
        <div>评分</div>
        <TitleFilter titleFilter={this.props.titleFilter} dataSource={this.props.dataSource} onTitleChanged={this.props.onTitleParentChanged}></TitleFilter>
      </div>
    )
  }
});