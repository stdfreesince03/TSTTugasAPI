const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

export default function handler(req, res) {
    if (req.url === '/api/info') {
        res.json({
            message: "API deployed successfully!",
            version: "1.0.0",
            author: "Winata Tristan,18222061"
        });
    } else {
        res.json({ message: "Winata Tristan,18222061,API TST, Halo." });
    }
}

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
