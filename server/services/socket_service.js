import db from "../db.js";
const FETCH_INTERVAL = 100000;
import {socketServer} from "../server.js";

class SocketService {

    randomValue(min = 0, max = 1, precision = 0) {
        const random = Math.random() * (max - min) + min;
        return random.toFixed(precision);
    }
      
    utcDate() {
        const now = new Date();
        return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    }
      
    getQuotes(socket) {

        const quotes = db.tickers.map((ticker, index) => ({
            _id: index,
            _category: ticker.category,
            _company: ticker.company,
            ticker: ticker.name,
            exchange: "NASDAQ",
            price: this.randomValue(10000, 30000, 2),
            change: this.randomValue(0, 200, 2),
            change_percent: this.randomValue(-1, 1, 2),
            dividend: this.randomValue(0, 1, 2),
            _yield: this.randomValue(0, 2, 2),
            last_trade_time: this.utcDate()
        }));

        socket.emit("ticker", quotes);
    }
      
    trackTickers(socket, array) {
        // run the first time immediately
        this.getQuotes(socket, array);
      
        // every N seconds
        const timer = setInterval( () => {
            this.getQuotes(socket);
        }, FETCH_INTERVAL);
      
        socket.on("disconnect", function() {
          clearInterval(timer);
        });
    }
    socketConnection() {
        let filtredTickers = [];
        return socketServer.on("connection", (socket) => {
            socket.on("start", () => {
                this.trackTickers(socket);
            });
        });
    }
}

export default new SocketService();