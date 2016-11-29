var React = require("react")
var ReactDOM = require("react-dom")

module.exports = React.createClass({
    displayName: 'CommentBox',
    render: function () {
        return (
            <div className="commentBox">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>

            );
    }
})