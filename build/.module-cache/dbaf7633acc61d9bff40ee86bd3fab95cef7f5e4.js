/**
 * Created by lss on 2016/8/21.
 */
var messagebox = React.createClass({displayName: "messagebox",
    alertm: function () {
        alert("你大爷，你刚才点了我一下。。。");
    },
    render: function () {
        return (React.createElement("h1", {onClick: this.alertm()}, "你好，react,js"))
    }
    
});


ReactDOM.render(React.createElement("messagebox", null),document.getElementById('app'), function () {
        console.log("渲染已完成");
    }
);