const http = require("http");
const os = require("os");

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

// Simple logger
function log(message) {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

const server = http.createServer((req, res) => {
  log(`${req.method} ${req.url}`);

  // ✅ Home UI
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head>
          <title>CI/CD App</title>
          <style>
            body {
              font-family: 'Segoe UI', sans-serif;
              margin: 0;
              padding: 0;
              background: linear-gradient(120deg, #141e30, #243b55);
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            .container {
              text-align: center;
              padding: 40px;
              border-radius: 12px;
              background: rgba(255,255,255,0.08);
              box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            }
            h1 { font-size: 36px; margin-bottom: 10px; }
            p { font-size: 18px; margin: 5px 0; }
            .tag {
              margin-top: 15px;
              padding: 6px 12px;
              background: #00c853;
              border-radius: 20px;
              display: inline-block;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>🚀 CI/CD Pipeline Deployed</h1>
            <p>Hello Nitesh 👋</p>
            <p>Application successfully deployed using AWS</p>
            <p><strong>Environment:</strong> ${ENV}</p>
            <p><strong>Server:</strong> ${os.hostname()}</p>
            <div class="tag">✅ Healthy</div>
          </div>
        </body>
      </html>
    `);
  }

  // ✅ Health Check (used for monitoring / load balancers)
  else if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      status: "UP",
      uptime: process.uptime(),
      timestamp: new Date(),
      env: ENV
    }));
  }

  // ✅ System Info (professional API)
  else if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      app: "Node CI/CD App",
      version: "1.0.0",
      hostname: os.hostname(),
      platform: os.platform(),
      uptime: process.uptime()
    }));
  }

  // ❌ 404 handler
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      error: "Not Found",
      message: "Invalid route"
    }));
  }
});

// ✅ Start Server
server.listen(PORT, () => {
  log(`✅ Server running on http://localhost:${PORT} (${ENV})`);
});
