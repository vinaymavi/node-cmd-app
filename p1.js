/**
 * Created by vinaymavi on 04/02/16.
 * Basic single thread example.
 */
setInterval(function(){
    console.log("yes :)");
},1000);
/**
 * This interval make busy event loop.
 * and new task will not execute.
 */
setInterval(function(){
    while(true){console.log("no :(");}
},1000);



