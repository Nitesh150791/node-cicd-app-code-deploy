const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Home route
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head>
          <title>CI/CD App</title>
          <style>
            body {
              font-family: Arial;
              text-align: center;
              background: linear-gradient(135deg, #00c6ff, #0072ff);
              color: white;
              margin-top: 100px;
            }
            h1 {
              font-size: 40px;
            }
            p {
              font-size: 20px;
            }
            .box {
              background: rgba(255,255,255,0.1);
              padding: 30px;
              border-radius: 10px;
              display: inline-block;
            }
          </style>
        </head>
        <body>
          <div class="box">
            <h1>🚀 CI/CD Pipeline Working</h1>
            <p>Hello Nitesh 👋</p>
            <p>Your AWS pipeline is successfully deployed ✅</p>
            <p><b>Server running on port ${PORT}</b></p>
          </div>
        </body>
      </html>
    `);
  }

  // Health check route
  else if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      status: "UP ✅",
      time: new Date(),
      service: "Node CI/CD App"
    }));
  }

  // About route
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      app: "Node CI/CD App",
      author: "Nitesh Sampat More",
      version: "1.0.0"
    }));
  }

  // 404 fallback
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("❌ Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
