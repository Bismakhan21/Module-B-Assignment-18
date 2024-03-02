const fs = require("fs");

// create file

fs.writeFileSync("text.txt", "Hello World...");

//read file

fs.readFile("text.txt","utf-8", (err, res)=>{
    console.log(res)
});

// updated file

fs.appendFile("text.txt", "This is Node Js Introduction", (err)=>{
   if(!err) {console.log('updated file of node js')};
})


// delete file

fs.unlinkSync("text.txt");