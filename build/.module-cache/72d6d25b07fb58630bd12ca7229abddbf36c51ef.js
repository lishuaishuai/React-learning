/**
 * Created by lss on 2016/8/22.
 */
var mystyle={
    fontSize:18,
    color:'#FF0000'
}
var atitle={
    
}
ReactDOM.render(
    React.createElement("h1", {style: mystyle}, "hello world!", 2*2, 1==1?"true":"false"),
    document.getElementById("app")
);