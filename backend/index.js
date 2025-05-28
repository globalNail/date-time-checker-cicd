const express = require("express");
const cors = require("cors");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

const app = express();
const PORT = process.env.PORT || 3001;
const TIMEZONE = "Asia/Ho_Chi_Minh"; // Múi giờ Việt Nam (UTC+7)

app.use(cors());
app.use(express.json());

// Health check endpoint for monitoring
app.get("/api/health", (req, res) => {
    res.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: "1.0.0",
    });
});

app.post("/api/check-datetime", (req, res) => {
    const { datetime } = req.body;
    if (!datetime) {
        return res.status(400).json({
            valid: false,
            message: "Thiếu dữ liệu datetime",
            timezone: TIMEZONE,
        });
    }

    try {
        const date = dayjs.tz(datetime, TIMEZONE);
        const valid = date.isValid();
        res.json({
            valid,
            formatted: valid ? date.format("DD/MM/YYYY HH:mm:ss") : null,
            timezone: TIMEZONE,
            offset: valid ? date.format("Z") : null, // Hiển thị offset +07:00
        });
    } catch (error) {
        res.status(400).json({
            valid: false,
            message: "Định dạng ngày giờ không hợp lệ",
            timezone: TIMEZONE,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
