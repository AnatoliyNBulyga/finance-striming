const db = {
    tickers: [
        { name: "AAPL", company: "Apple", category: 1}, // Apple, USA
        { name: "GOOGL", company: "Google", category: 1}, // Alphabet, USA
        { name: "MSFT", company: "Microsoft", category: 2}, // Microsoft, Europe
        { name: "AMZN", company: "Amazon", category: 3}, // Amazon, Asia
        { name: "FB", company: "Facebook", category: 3}, // Facebook, Asia
        { name: "TSLA", company: "Tesla", category: 1}, // Tesla, USA
    ],
    categories: [
        "All",
        "USA", 
        "Europe", 
        "Asia", 
        "Crypto"
    ]
}

export default db;