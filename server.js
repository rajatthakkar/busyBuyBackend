import server from "./index.js";
import connectMongooseDB from "./src/config/db.config.js"; 
server.get('/', (req, res) => {
  res.send('Hello, world!');
});

server.listen(3000, () => {
    connectMongooseDB()
  console.log("Server is listening on port 3000");
});
