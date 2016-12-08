'use strict'
var ReactDOM = require('react-dom');
var Icon = require('./icon');
var Movie = require('./movie');
var RefreshButton = require('./refreshbutton');
ReactDOM.render(
  <div>
    <RefreshButton></RefreshButton>
    <Movie></Movie>
  </div>,
  document.getElementById('content')
);