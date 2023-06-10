import pino from "pino";

export const logger = pino({
  name: "http-logger",
  level: "debug",
});
