import server from "./index.js";
import connectMongooseDB from "./src/config/db.config.js"; 


server.listen(3000, () => {
    connectMongooseDB()
  console.log("Server is listening on port 3000");
});
