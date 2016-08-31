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

var Messagebox = React.createClass({displayName: "Messagebox",
    render: function () {
        return React.createElement("h1", null, this.props.name);
    }
});

var Name = React.createClass({displayName: "Name",
    render: function () {
        return (React.createElement("h1", null, this.props.name));
    }
});

var Link = React.createClass({displayName: "Link",
    render: function () {
        return (React.createElement("a", {href: this.props.link}, this.props.link));
    }
});

var WebSite = React.createClass({displayName: "WebSite",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(Name, {name: this.props.name}), 
                React.createElement(Link, {link: this.props.link})
            )
        );
    }
});

var LinkButten = React.createClass({displayName: "LinkButten",
    getInitialState: function () {
        return {stat: false};
    },
    handleClick: function () {
        this.setState({stat: !this.state.stat});
    },
    componentDidMount: function () {
        //alert("初始化完成");
    },
    render: function () {
        var text = this.state.stat ? "你大爷" : "你妹";
        return (
            React.createElement("h1", {onClick: this.handleClick}, 
                "点我切换", text
            )
        );
    }
});

var UserGist = React.createClass({displayName: "UserGist",
    getInitialState: function () {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount: function () {
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    render: function () {
        return (
            React.createElement("div", null, 
                this.state.username, " 用户最新的 Gist 共享地址：", 
                React.createElement("a", {href: this.state.lastGistUrl}, this.state.lastGistUrl)
            )
        );
    }
});

var HelloMessage = React.createClass({displayName: "HelloMessage",
    getInitialState: function () {
        return {data: "hello react"};
    },
    handleChange: function (event) {
        this.setState({data: event.target.value});
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", value: this.state.data, onChange: this.handleChange}), 
                React.createElement("h1", null, this.state.data)
            ));
    }
});

var Ref = React.createClass({displayName: "Ref",
    handleClick: function () {
        this.refs.nidaye.focus();
    },
    render: function () {
        return (React.createElement("div", null, 
            React.createElement("input", {type: "text", ref: "nidaye"}), 
            React.createElement("button", {onClick: this.handleClick}, "点击输入框获取焦点")
        ));
    }
});

ReactDOM.render(
    React.createElement(UserGist, {source: "https://api.github.com/users/octocat/gists"}),
    document.getElementById("moun")
);


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

ReactDOM.render(
    React.createElement(HelloMessage, null),
    document.getElementById("hello")
);


