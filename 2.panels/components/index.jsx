'use strict';
var React = require('react')
var ReactDOM = require('react-dom')

var Panel=require('./panel')
var Panels = require('./panels')


ReactDOM.render(
    <Panels/>
    ,document.getElementById('content')
    )