/**
 * Created by lss on 2016/8/22.
 */
var mystyle={
    fontSize:14,
    color:red
}
ReactDOM.render(
    React.createElement("h1", {"data-mydata": "124", style: mystyle}, "hello world!", 2*2, 1==1?"true":"false"),
    document.getElementById("app")
);