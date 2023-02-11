import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes";
import { mongodbInstance } from "./libs/mongodbInstance";
import { header } from "./middlewares/header";

const main = async () => {
  // create and setup express app
  const app = express();

  // use middleware
  app.use(cors());

  app.use(express.json());

  // routers
  app.use("/api", header.allowAll, router);

  app.listen(process.env.PORT, () => {
    // connect to mongodb server
    mongodbInstance();

    console.log(
      `🚀 CMsuicApi Server is running on port http://localhost:${process.env.PORT}/api ...`
    );
  });
};

main().catch((err) => {
  console.log(err);
});
