import app from "../src/app";
import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  app(req, res);
});

export default server;
