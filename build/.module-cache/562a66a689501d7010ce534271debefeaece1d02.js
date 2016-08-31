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

var Name=React.createClass({displayName: "Name",
    render:function () {
        return (React.createElement("h1", null, this.props.name));
    }
});

var Link=React.createClass({displayName: "Link",
    render:function () {
        return (React.createElement("a", {href: this.props.link}, this.props.link));
    }
});

var WebSite=React.createClass({displayName: "WebSite",
    render:function () {
        return (
            React.createElement("div", null, 
                React.createElement(Name, {name: this.props.name}), 
                React.createElement(Link, {link: this.props.link})
            )
        );
    }
});

var LinkButten=React.createClass({displayName: "LinkButten",
    getInitialState:function () {
        return {stat:false};
    },
    handleClick:function () {
        this.setState({stat:!this.state.stat});
    },
    componentDidMount:function () {
      alert("初始化完成");
    },
    render:function () {
        var text=this.state.stat?"你大爷":"你妹";
        return (
            React.createElement("h1", {onClick: this.handleClick}, 
                "点我切换", text
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

ReactDOM.render(
    React.createElement(WebSite, {name: "百度", link: "http://www.baidu.com"}),
    document.getElementById("web")
);

ReactDOM.render(
    React.createElement(LinkButten, null),
    document.getElementById("link")
);



