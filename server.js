// creating our server using node

// first we should import the http module 

const http = require('http')
const fs = require('fs');

const server = http.createServer((req , res) => {
    console.log('request made');

    // listening  to the port and local host
    server.listen(3000 , 'localhost' , () => {
        console.log('listening to the local host');
    })

    // responding to the requests (this is just a text response)

    // First we should set the header to tell what content we are sending as response
    // in this case we are responding with plain text as response
        
    res.setHeader('Content-Type' , 'text/plain' );
     res.write("you have made a succesful request");
    res.end();
    
// -----------------------------------------------------------------------------------------------------
// responding with html code from another file
    
// in this case we are sending a html page as response
    res.setHeader('Content-Type' , 'text/html' );


    // first reading the file 
    fs.readFile('./src/index.html' , (err , data) => {
        if(err)
        {
            console.log(err);
            res.end();
        }
        
        else
        {
        // then writing the file in the browser
            res.write(data);

            // ending the request

             res.end();
        }
    });
    
   

})




