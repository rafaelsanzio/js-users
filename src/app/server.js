import express, { json } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import usersRouter from "./api/routes/users.js";

const app = express();
const PORT = 3000;

app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());
app.use(json());

app.use("/users", usersRouter);

function onStart() {
  console.log(`Server running on PORT: ${PORT}`);
}

app.listen(PORT, onStart);

export default app;
