/**
 * Created by lss on 2016/8/21.
 */
var messagebox = React.createClass({displayName: "messagebox",
    render: function () {
        return (React.createElement("h1", null, "你好，123react,js"));
    }

});


ReactDOM.render(React.createElement("messagebox", null),document.getElementById('app'), function () {
        console.log("渲染已完成");
    }
);