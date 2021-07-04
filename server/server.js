"use strict";
// core
import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
// routes
import tickersRouter from "./routes/tickers.routes.js";
import SocketService from "./services/socket_service.js";
// PORT
const PORT = process.env.PORT || 4000;
// app
const app = express();
app.use(cors());
export const server = http.createServer(app);
// socket
export const socketServer = new Server(server, {
  cors: {
      origin: "*",
  }
});
SocketService.socketConnection();
// routes
app.use("/api/tickers", tickersRouter);
// static
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
// server listener
server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
