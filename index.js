// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('🚀 CI/CD DevOps Pipeline Running!');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
