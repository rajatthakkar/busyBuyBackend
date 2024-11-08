import connectMongooseDB from "./src/config/db.config.js"; 
const port = process.env.PORT || 4000;
import express from 'express'
import userRoutes from './src/features/User/user.routes.js'
const server = express();
server.use(express.json())
server.use('/api/user',userRoutes)
console.log(port)
server.get('/', (req, res) => {
  res.send('Hello, world!');
});

server.listen(port, () => {
    connectMongooseDB()
  console.log("Server is listening on port 3000");
});
