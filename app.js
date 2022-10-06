import express from "express";
import helmet from "helmet";
import routes from "./routes/index.js"

const app = express();

app.use(helmet());
app.use(express.json());
routes(app);

export default app;
