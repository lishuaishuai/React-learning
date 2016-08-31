/**
 * Created by lss on 2016/8/22.
 */
var mystyle = {
    fontSize: 18,
    color: '#FF0000'
};
var atitle = [
     React.createElement("h1", null, "菜鸟教程"),
    React.createElement("h2", null, "学的不仅是技术，更是梦想！"),
];

var Messagebox=React.createClass({displayName: "Messagebox",
    render:function () {
        return React.createElement("h1", null, this.props.name);
    }
});

var WebSite=React.createClass({displayName: "WebSite",
    render:function () {
        return (
            React.createElement("div", null, 
                React.createElement("div", null, "this is web name"), 
                React.createElement("div", null, "this is web href")
            )
        );
    }
});


ReactDOM.render(
    React.createElement("h1", {style: mystyle}, "hello world!", 2 * 2, 1 == 1 ? "true" : "false"),
    document.getElementById("app")
);

ReactDOM.render(
    React.createElement("div", null, " ", atitle),
    document.getElementById("exc")
);

ReactDOM.render(
    React.createElement(Messagebox, {name: "你妹"}),
    document.getElementById("mes")
);

