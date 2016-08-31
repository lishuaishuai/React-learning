/**
 * Created by lss on 2016/8/21.
 */
var CommentBox = React.createClass({displayName: "CommentBox",
    alertm:function () {
      alert("react,你大爷");
    },
    render: function() {
        return (
            React.createElement("div", {className: "commentBox"}, 
                "Hello, world! I am a CommentBox."
            )
        );
    }
});
ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('app')
);