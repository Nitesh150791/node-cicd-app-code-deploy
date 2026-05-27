const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("🚀 CI/CD App Running on EC2!");
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});

