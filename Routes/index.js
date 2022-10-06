import cors from "cors";

const routes = (app) => {
  app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "X-PINGOTHER, Content-Type, Authorization"
    );
    app.use(cors());
    next();
  });
}

export default routes;