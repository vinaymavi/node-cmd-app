/**
 * Created by vinaymavi on 04/02/16.
 */
var fs = require("fs");
fs.readFile("foo.txt",'utf-8',function(err,data){
    if(err){
        console.log("error occur in reading.")
        return;
    }
    console.log("**************************File content**********************");
    console.log(data);
});

console.log("Reading file......");