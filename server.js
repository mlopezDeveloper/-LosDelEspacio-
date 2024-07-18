// server.js
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = 5500;

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
