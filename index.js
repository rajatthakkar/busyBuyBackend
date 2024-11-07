import express from 'express'
import userRoutes from './src/features/User/user.routes.js'
const server = express();

server.use('/api/user',userRoutes)



export default server;