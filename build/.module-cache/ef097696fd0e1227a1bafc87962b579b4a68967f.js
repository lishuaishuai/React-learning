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

var Messagebox=Recat.createClass({
    render:function () {
        return React.createElement("h1", null, "你大爷！")
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

RecatDOM.render(
    React.createElement(Messagebox, null),
    document.getElementById("mes")
);