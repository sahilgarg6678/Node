const http = require("http")  //common js module importing the http module


const requestacceptor = (req,res) =>{    //a request listener that accepet the request or send the response
    res.writeHead(200);
    res.end("hello i am here")
}


const server = http.createServer(requestacceptor);  //http package provide us with create server method 
server.listen(8080); //we are running this application in our system