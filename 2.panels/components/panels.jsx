'use strict';

var React = require('react')
var ReactDOM = require('react-dom')

var Panel = require('./panel')

module.exports = React.createClass({
    displayName: 'panels',
    //css:{
    //    panel: {
    //        "width": "350px", "height": "320px", "border": "1px solid silver"
    //    },
    //    logo: {
    //        "width":"100%","paddingLeft":"15px"
    //    },
    //    detail: {
    //        "width":"100%","textAlign":"center","marginTop":"10px"
    //    },
    //    publishdate: {
    //        "width":"280px","height":"40px","lineHeight":"20px","float":"left"
    //    }
    //},

    render: function () {
        return <div>
            <Panel/>
            <Panel />
        </div>
    }
});
