const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { NotFoundError } = require("./utils/errors");
const { PORT } = require("./config");
const authRoutes = require("./routes/auth");
const userPreferenceRoutes = require("./routes/user_preference");
// const security = require("../the-lamb-project-api/middleware/security");

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan("tiny"));

// app.use(security.extractUserFromJwt);
app.use("/auth", authRoutes);
app.use("/user", userPreferenceRoutes);

app.get("/", function (req, res) {
  return res.status(200).json({
    ping: "pong",
  });
});
app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use(function (req, res, next) {
  return next(new NotFoundError());
});
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
