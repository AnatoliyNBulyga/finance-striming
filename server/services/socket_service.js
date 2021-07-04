import db from "../db.js";
const FETCH_INTERVAL = 8000;
import { socketServer } from "../server.js";


class SocketService {

    randomValue(min = 0, max = 1, precision = 0) {
        const random = Math.random() * (max - min) + min;
        return random.toFixed(precision);
    }
      
    utcDate() {
        const now = new Date();
        return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    }
      
    getQuotes({socket, options}) {

        let result = [...db.tickers];
        // if set options from socket
        if (options) {
            const {category} = options;
            if (category) {  // if index of category > 0 => filtring array else by default "All" 
                result = db.tickers.filter( ticker => ticker.category === category );
            }
        }
        const quotes = result.map((ticker) => ({
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
      
    trackTickers({socket, options}) { 

        // run the first time immediately
        this.getQuotes({socket, options});

        // every N seconds
        const timer = setInterval( () => {
            this.getQuotes({socket, options});
        }, FETCH_INTERVAL); 

        const clear = () => {
            clearInterval(timer);
        }

        // clear interval after set new options
        socket.on("start", clear);
        socket.on("disconnect", clear);
    }

    socketConnection() {
        return socketServer.on("connection", (socket) => {
            socket.on("start", (options) => {
                const args = {
                    socket,
                    options
                }
                this.trackTickers(args);
            });
        });
    }
}

export default new SocketService();