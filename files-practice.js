const { log, error } = require('console');
const fs = require('fs');


// reading from a file

fs.readFile('./docs/text.txt' , (err , value) => {
    if(err)
    {
        console.log(err);
    }

    console.log(value.toString());
})


// writing in a  file 
// if the file is not there it will create a new file and write in it


fs.writeFile('./docs/text1.txt' , 'this is written in the file' , () => {
    console.log('new file created');
})

// creating directories

if(!fs.existsSync('./files1'))
{

    
    fs.mkdir('./files1' , (err) => {
        if(err)
        {
            console.log(err);
        }
        
        console.log('new directory created');
    })
}

else{
    console.log('folder already exists');
}


// deleting folders

fs.rmdir('./files' , (err) => {
    if(err)
    {
        console.log(err);
    }

    else
    console.log('folder deleted');
})



// deleting files

fs.unlink('./docs/text1.txt' , (err) => {
    if(err)
    {
        console.log(err);
    }

    else
    console.log('file deleted');
})