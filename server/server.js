"use strict";
import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

import tickersRouter from "./routes/tickers.routes.js";
import SocketService from "./services/socket_service.js";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
export const server = http.createServer(app);

export const socketServer = new Server(server, {
  cors: {
      origin: "*",
  }
});

SocketService.socketConnection();

app.use("/api/tickers", tickersRouter);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
