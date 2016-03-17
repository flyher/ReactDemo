'use strict';

var React = require("react");

module.exports = React.createClass({
    displayName: 'panel',
    getInitialState:function () {
        return {
            logo: "http://img.99diary.com/blog/src/201603161422/logo.jpg",
            title: "让《疯狂动物城》背后的迪士尼告诉...",
            publishdate:"2016-03-15"
        }
    },
    render: function () {
        return <div style={{"width":"350px","height":"300px","border":"1px solid silver","MozBoxShadow":"2px 2px 13px #333333","WebkitBoxShadow":"2px 2px 13px #333333","BoxShadow":"2px 2px 13px #333333"}}>
                <div style= {{"width":"320px","height":"240px","margin":"auto auto","cursor":"pointer"}} onClick={this.showdetail}>
                    <img src={this.state.logo} width="320" height="240" />
                </div>
                <div style={{"width":"320px","height":"50px","margin":"10px auto auto auto"}}>
                    <div style={{"width":"40px","float":"left"}}>
                        <img src={this.state.logo} width="38" height="38" />
                    </div>

                    <div style={{"width":"280px","float":"left"}}>
                        <div>{this.state.title}</div>
                        <div>
                            {this.state.publishdate}
                        </div>
                    </div>
                </div>
            </div>
    },
    showdetail: function (event) {
        //获取点击的对象信息
        //event
        //event.targe.height
        //event.targe.width
        //event.targe.src

        //获取对象绑定的数据对象
        //this
        //console.log(this);
        this.setState(
            {
                title: "《疯狂动物城2》即将上映",
                publishdate: "2016-03-16"
            }
        );
    }

});