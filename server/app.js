import 'dotenv/config'
import express from "express"
import sequelize from './config/connection.js'
import routerIndex from './routes/index.routes.js'
import cookieParser from 'cookie-parser'
import cors from "cors"

// SERVER CONFIGURATION
const app = express()
    // MIDDLEWARES
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({origin:"http://localhost:3000",credentials:true}))

app.use("/",routerIndex)



// DATABASE CONNECTION
sequelize.authenticate().then(()=>{
    return sequelize.sync()
})
    .then(()=>{
        console.log("Connection succesful")
    })
    .catch((e)=>{
        console.error("Connection Failed")
    })

app.listen(process.env.SERVER_PORT,()=>{
    console.log("Server Running on PORT #",process.env.SERVER_PORT)
})


