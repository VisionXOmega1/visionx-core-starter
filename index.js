
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('VisionX is Live!');
});

app.get('/signal', (req, res) => {
    res.json({ status: '🟢 VisionX Signal Active' });
});

app.listen(PORT, () => {
    console.log(`VisionX Server running on port ${PORT}`);
});
