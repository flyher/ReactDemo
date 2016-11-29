'use strict';

var React = require('react')
var ReactDOM = require('react-dom')

//var $ = require('jquery')
//var Bootstrap=require('bootstrap')

var Hello = require('./hello')
var CommentBox=require('./CommentBox')

ReactDOM.render(
    <div>
        <Hello/>
        <CommentBox author="apple"/>
    </div>
    ,
    document.getElementById('content')
)