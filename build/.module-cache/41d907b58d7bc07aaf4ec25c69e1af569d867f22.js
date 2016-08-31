/**
 * Created by lss on 2016/8/21.
 */
var CommentBox = React.createClass({displayName: "CommentBox",

    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                "狗日里命运，你麻痹"
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('app')
);