/**
 * Created by lss on 2016/8/22.
 */
ReactDOM.render(
    React.createElement("h1", {"data-mydata": "124"}, "hello world!", 2*2, 1==1?"true":"false"),
    document.getElementById("app")
);