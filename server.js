import server from "./index.js";
import connectMongooseDB from "./src/config/db.config.js"; 
const port = process.env.PORT || 4000;
console.log(port)
server.get('/', (req, res) => {
  res.send('Hello, world!');
});

server.listen(port, () => {
    connectMongooseDB()
  console.log("Server is listening on port 3000");
});
