const fsPromises = require("fs").promises;
const path = require('path');


async function fileOps() {

    try {

       const data =  await fsPromises.readFile(path.join(__dirname , 'texts' , 'hello.txt') , 'utf-8')
       console.log(data);
       await fsPromises.writeFile(path.join(__dirname , 'texts' , 'newfile.txt') , data);
       await fsPromises.unlink(path.join(__dirname , 'texts' , 'hello.txt' ));
       

    }

    catch(err)
    {
        console.error(err);
    }
}

fileOps();