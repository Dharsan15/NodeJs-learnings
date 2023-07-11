// creating our server using node

// first we should import the http module 

const http = require('http')

const server = http.createServer((req , res) => {
    console.log('request made');
    console.log(req.type);
})


server.listen(3000 , 'localhost' , () => {
    console.log('listening to the local host');
})