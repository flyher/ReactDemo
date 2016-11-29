'use strict'
var ReactDOM = require('react-dom');
// require('../css/box.css');
var Box = require('./box');
var Panel = require('./panel');

// var $ = require('jquery');


ReactDOM.render(
  <div>
    <Box></Box>
    <Panel></Panel>
  </div>,
  document.getElementById('content')); 