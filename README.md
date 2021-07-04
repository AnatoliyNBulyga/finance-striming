# React Test Task
**Stack:**
- ReactJS + hooks
- React Router
- Redux
- Redux thunk
- Socket.io
- Material UI
- Axios
- Node.js
- Express.js
- REST API
- Authorization by Auth0
- Jest

## Run the application
1. Open a new bash shell
2. ```cd client```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```
- Login auth0 by email and password or you can continue with google account
- If you don't have an account you can sign up

## Running the local service
1. Open a new bash shell
2. ```cd server```
3. ```npm install```
4. ```npm run dev``` 
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

# Price Service Usage
URL:
```http://localhost:4000```

Price tickers are real-time via web-sockets.

## Implemented bonus functionality in this project:
- additional visual effects to highlight positive or negative changes in the prices on pure css and with GSAP library
- the possibility to sort tickers by categories
- login with service Auth0
- for example implement api request between client and server
- implement server architecture for further scaling
- for example implement rotes on server
- add nodemon package that helps automatically restarting the node application when file changes in the directory are detected