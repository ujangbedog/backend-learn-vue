import dotenv from "dotenv";
dotenv.config(); // ⬅ penting

import { Request, ParamsDictionary, Response } from "express-serve-static-core";
import { IncomingMessage, ServerResponse } from "http";
import { ParsedQs } from "qs";
import app from "./app";

const PORT = process.env.PORT || 3000;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

if (process.env.NODE_ENV === "development") {
  startServer();
}

export default (
  req:
    | IncomingMessage
    | Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
  res:
    | Response<any, Record<string, any>, number>
    | ServerResponse<IncomingMessage>
) => {
  app(req, res);
};
