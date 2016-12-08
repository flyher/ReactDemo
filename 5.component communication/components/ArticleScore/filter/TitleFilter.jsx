'use strict'
module.exports = React.createClass({
  displayName: 'TitleFilter',
  // getInitialState:function(){
  //   console.log(this);
  // },
  // onTitleChanged: function (event) {
  //   console.log(event.target.value);
  //   // this.setState({
  //   //   titleFilter:event.target.value
  //   // });
  // },
  render: function () {
    // 默认值 defaultValue
    return (
      <div>
        <span>按标题筛选</span>
        <input type="text" defaultValue={this.props.titleFilter} onChange={this.props.onTitleChanged} />
        <span>{this.props.titleFilter}</span>
      </div>
    )
  }
});