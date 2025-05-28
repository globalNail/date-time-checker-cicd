const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check endpoint for monitoring
app.get("/api/health", (req, res) => {
    res.json({ 
        status: "healthy", 
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: "1.0.0"
    });
});

app.post("/api/check-datetime", (req, res) => {
    const { datetime } = req.body;
    if (!datetime) {
        return res
            .status(400)
            .json({ valid: false, message: "Thiếu dữ liệu datetime" });
    }
    const date = new Date(datetime);
    const valid = !isNaN(date.getTime());
    res.json({ valid });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
