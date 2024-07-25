const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());

// Cấu hình CORS
const corsOptions = {
    origin: '*', // Cho phép tất cả các nguồn, bạn có thể thay thế bằng URL cụ thể như 'http://localhost:3000' nếu frontend chạy trên cổng 3000
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'private-key']
};
app.use(cors(corsOptions));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "2b882e7c-d7b2-4c5c-aa64-af89da7263a3" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        console.error("Error details:", e.message, e.stack);

        const statusCode = e.response ? e.response.status : 500;
        const message = e.response ? e.response.data : "Internal Server Error";

        return res.status(statusCode).json({ error: message });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
