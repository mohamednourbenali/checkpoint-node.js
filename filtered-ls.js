var fs = require("fs");
var path = require("path");

var directory = process.argv[2];
var extension = "."+process.argv[3];

fs.readdir(directory,function(err,list){
    for(let i=0;i<list.length;i++){
        if ((path.extname(list[i]))===extension){
            console.log(list[i]);
        }
    }
})


