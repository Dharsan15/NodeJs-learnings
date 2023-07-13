// lets do a very basic routing

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made", req.url);

  res.setHeader("Content-Type", "text/html");

  let path = "./src/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/contact":
      path += "contact.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(5000, "localhost", () => {
  console.log("listening to the port 5000");
});
