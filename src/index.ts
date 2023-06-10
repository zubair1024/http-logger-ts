import express, { Request, Response } from "express";
import expressPinoLogger from "express-pino-logger";
import { variables } from "./variables";
import { logger } from "./logger";
import { connectDB } from "./db";
import AppRequest from "./models/Request";

const app = express();

app.use(express.json());
app.use(expressPinoLogger({ logger: logger }));

async function logAppRequest(req: Request) {
  const path = req.path as string;
  const body = req.body as any;
  const query = req.query as any;
  const params = req.params as any;
  await connectDB();
  const requestObj = new AppRequest({
    path,
    method: req.method,
    body,
    query,
    params,
  });
  await requestObj.save();
}

app.get("/", async (req: Request, res: Response) => {
  try {
    await logAppRequest(req);
    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({});
  }
});

app.post("/", async (req: Request, res: Response) => {
  try {
    await logAppRequest(req);
    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({});
  }
});

app.patch("/", async (req: Request, res: Response) => {
  try {
    await logAppRequest(req);
    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({});
  }
});

app.delete("/", async (req: Request, res: Response) => {
  try {
    await logAppRequest(req);
    return res.status(200).send({});
  } catch (err) {
    console.error(err);
    return res.status(500).send({});
  }
});

async function run() {
  try {
    await connectDB();
    app.listen(variables.PORT, () => {
      console.log(`Connection established on PORT ${variables.PORT}`);
    });
  } catch (err) {
    console.error("Critical Error ");
    console.error(err);
    process.exit(1);
  }
}

void run();
