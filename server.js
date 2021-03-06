const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// This allows us to access the body of a request
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("You made it!"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/goal", require("./routes/api/goal"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
