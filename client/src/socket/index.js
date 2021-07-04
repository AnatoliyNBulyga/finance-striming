// core
import { io } from "socket.io-client";
// config settings
import { WS_URL } from "../config.js";

const socket = io(WS_URL);

socket.on("connect", () => {
    console.log("Websocket connected ");
});

socket.on("connect_error", (connect_error) => {
    console.log("Websocket connection error");
    console.log(connect_error);
});

socket.on("connect_timeout", (connect_timeout) => {
    console.log("Websocket connection timeout");
    console.log(connect_timeout);
});

socket.on("disconnect", (reason) => {
    console.log("Websocket disconnected!");
    console.log("Disconnection reason: ", reason);
});

export default socket;