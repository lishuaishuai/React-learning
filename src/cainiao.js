/**
 * Created by lss on 2016/8/22.
 */
var mystyle = {
    fontSize: 18,
    color: '#FF0000'
};

var atitle = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];

var Messagebox = React.createClass({
    render: function () {
        return <h1>{this.props.name}</h1>;
    }
});

var Name = React.createClass({
    render: function () {
        return (<h1>{this.props.name}</h1>);
    }
});

var Link = React.createClass({
    render: function () {
        return (<a href={this.props.link}>{this.props.link}</a>);
    }
});

var WebSite = React.createClass({
    render: function () {
        return (
            <div>
                <Name name={this.props.name}/>
                <Link link={this.props.link}/>
            </div>
        );
    }
});

var LinkButten = React.createClass({
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
            <h1 onClick={this.handleClick}>
                点我切换{text}
            </h1>
        );
    }
});

var UserGist = React.createClass({
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
            <div>
                {this.state.username} 用户最新的 Gist 共享地址：
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
            </div>
        );
    }
});

var HelloMessage = React.createClass({
    getInitialState: function () {
        return {data: "hello react"};
    },
    handleChange: function (event) {
        this.setState({data: event.target.value});
    },
    render: function () {
        return (
            <div>
                <input type="text" value={this.state.data} onChange={this.handleChange}/>
                <h1>{this.state.data}</h1>
            </div>);
    }
});

var Ref = React.createClass({
    handleClick: function () {
        this.refs.nidaye.focus();
    },
    render: function () {
        return (<div>
            <input type="text" ref="nidaye"/>
            <button onClick={this.handleClick}>点击输入框获取焦点</button>
        </div>);
    }
});

ReactDOM.render(
    <UserGist source="https://api.github.com/users/octocat/gists"/>,
    document.getElementById("moun")
);


ReactDOM.render(
    <h1 style={mystyle}>hello world!{2 * 2}{1 == 1 ? "true" : "false"}</h1>,
    document.getElementById("app")
);

ReactDOM.render(
    <div> {atitle}</div>,
    document.getElementById("exc")
);

ReactDOM.render(
    <Messagebox name="你妹"/>,
    document.getElementById("mes")
);

ReactDOM.render(
    <WebSite name="百度" link="http://www.baidu.com"/>,
    document.getElementById("web")
);

ReactDOM.render(
    <LinkButten />,
    document.getElementById("link")
);

ReactDOM.render(
    <HelloMessage/>,
    document.getElementById("hello")
);

ReactDOM.render(
    <Ref/>,
    document.getElementById("ref")
);

