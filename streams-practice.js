const fs = require("fs");

//creating a read stream
const readstream = fs.createReadStream("./read.txt");

// creating a write stream
const writestream = fs.createWriteStream("./read2.txt");

readstream.on("data", (chunk) => {
  // getting a chunk of data and printing it
  console.log(chunk.toString());

  // writing the chunk in another file
  writestream.write("\n new chunk added \n");
  writestream.write(chunk);
});


// doing the above task using piping 

readstream.pipe(writestream);