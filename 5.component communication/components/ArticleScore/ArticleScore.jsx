'use strict'
var MainFilter = require('./filter/MainFilter.jsx');
var MainTable = require('./table/MainTable');
module.exports = React.createClass({
  displayName: 'ArticleScore',
  getInitialState: function () {
    return {
      // 在getInitialState加载ajax请求会导致后面子组件调用时需要回调才能获取这里的数据
      // dataSource: $.getJSON('./components/ArticleScore/data.json', function (data) {
      //   return data.responseJSON;
      // }),
      dataSourceBase: [],//ajax来的原始数据
      dataSource: [],//绑定的数据
      titleFilter: '重生'//过滤器关键字
    }
  },
  componentDidMount: function () {
    $.getJSON('./components/ArticleScore/data.json', function (result) {
      if (this.isMounted()) {
        this.setState({
          dataSourceBase: result,
          dataSource: result
        });
      }
    }.bind(this));
  },
  // 从子组件逐级上传上来的更新事件
  // 子组件 层次2 TitleFilter.jsx(onChange={this.props.onTitleChanged}) 调用父组件(子组件 层次1) onTitleChanged 方法
  // 子组件 层次1 MainFilter.jsx(onTitleChanged={this.props.onTitleParentChanged}) 调用父组件(父组件 层次0) onTitleParentChanged 方法
  // 父组件 层次0 ArticleScore.jsx(onTitleParentChanged={this.onTitleParentChanged}) 调用本级 onTitleParentChanged 方法 
  onTitleParentChanged: function (event) {
    var keyword = event.target.value;
    var scores = [];
    this.state.dataSourceBase.map(function (obj) {
      if (obj.title.indexOf(keyword) >= 0) {
        scores.push(obj);
      }
    });
    this.setState({
      dataSource: scores
    });
  },
  render: function () {
    return (
      <div>
        <div>评分</div>
        <MainFilter titleFilter={this.state.titleFilter} onTitleParentChanged={this.onTitleParentChanged}></MainFilter>
        <MainTable dataSource={this.state.dataSource}></MainTable>
      </div>
    )
  }
});