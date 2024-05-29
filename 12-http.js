const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    return res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    return res.end("Here is abot our history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for!</p>
    <a href="/">Back home</a>
    `);
});


// const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
//   if (req.url === '/') {
//     res.end('Welcome to our home page')
//   } else if (req.url === '/about') {
//     res.end('Here is our short history')
//   } else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
//   }
// })


server.listen(5000);
// server.listen(5000, "127.0.0.1", () => {
//   console.log("listening on port 5000");
// });
