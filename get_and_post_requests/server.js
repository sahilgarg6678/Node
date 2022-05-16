const http = require("http")

const requestAcceptor = (req, res) => {
    console.log(req.url);

    if (req.method == "POST" && req.url == "/user") {
        res.writeHead(200);
        res.end("Hello i am a POST request")

    }

    else if (req.method == "GET") {
        res.writeHead(200)
        res.end("Hello i am a get request here")
    }

    else if (req.method == "PUT") {
        res.writeHead(200)
        res.end("Hello i am a PUT request here")
    }

    else if (req.method == "POST" && req.url == "/") {
        res.writeHead(200)
        res.end("hello i am a root post request")
    }

    // if(req.method == "GET" && req.url == "/"){
    //     res.write("<h1>Hello mr</h1>")
    //     res.end()
    // }

}

const server = http.createServer(requestAcceptor);

server.listen(8080);


//browser only accept the request which are known as a GET request. but how we have handle the POST request ...then POST request can be handled by with the help of POSTMAN TOOL. and in the POSTMAN TOOL we can also handle many of the other requests like : POST, PATCH, PUT, DELETE Etc.  