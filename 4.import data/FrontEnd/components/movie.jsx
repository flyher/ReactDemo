'use strict'
var React = require('react');
var Icon = require('./icon');


module.exports = React.createClass({
  displayName: 'Movie',
  getInitialState: function () {
    return {
      movies: [{
        id: 1,
        name: "A",
        logo: "../Img/1.jpg",
        updateid: 0,
        updatedate: "2016-10-26 00:00:00"
      }
      ]
    };
  },
  componentDidMount: function () {
    $.get("http://localhost:43286/Movie/getlist", function (result) {
      var movies = JSON.parse(result).data;
      if (this.isMounted()) {
        // Warning: setState(...): You passed an undefined or null state object; instead, use forceUpdate().
        // this.setState(
        //   obj
        // );

        // forceUpdate()

        // forceUpdate([function callback])
        // 如果 render() 方法从 this.props 或者 this.state 之外的地方读取数据，你需要通过调用 forceUpdate() 告诉 React 什么时候需要再次运行 render()。如果直接改变了 this.state，也需要调用 forceUpdate()。

        // 调用 forceUpdate() 将会导致 render() 方法在相应的组件上被调用，并且子级组件也会调用自己的 render()，但是如果标记改变了，那么 React 仅会更新 DOM。

        // 通常情况下，应该尽量避免所有使用 forceUpdate() 的情况，在 render() 中仅从 this.props 和 this.state 中读取数据。这会使应用大大简化，并且更加高效。


        // error
        // this.forceUpdate(function(){
        //   this.setState(
        //     obj
        //   );
        // }
        // );

        // 
        this.setState({
          movies: movies
        });
        console.log(this);
      }
    }.bind(this));
  },
  render: function () {
    // var com = '';
    // 这样会报错     // invariant.js:38 Uncaught Error: Movie.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.(…)
    // react return出来的都需要一个大的div包裹
    // this.state.movies.map(function (movie) {
    //   com = com + '<div className="movie" key={movie.id}>\
    //     <div className="left">\
    //       <Icon data={movie}></Icon>\
    //     </div>\
    //     <div className="right">\
    //       <div className="name">{movie.name}</div>\
    //       <div className="intro">{movie.updatedate}</div>\
    //     </div>\
    //   </div>';
    // })
    // return (
    //   { com }
    // )
    // <Icon data={movie}></Icon>

    var movieshtml = this.state.movies.map(function (movie) {
      // 将movie传入
      return (
        <div className="panel panel-primary" key={movie.id}>
          <div className="movie panel-body">
            <div className="left">
              <Icon data={movie}></Icon>
            </div>
            <div className="right">
              <div className="name">{movie.name}</div>
              <div className="intro">{movie.updatedate}</div>
            </div>
          </div >
        </div>
      )
    });
    return <div>{movieshtml}</div>
  }
});

