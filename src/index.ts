import "reflect-metadata";
import 'module-alias/register';
import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { UserModule } from "./Modules/User";
import connectDB from '@utils/db';
import cron from "node-cron"
import request from 'request'

dotenv.config();


const app: Express = express();
const server = http.createServer(app);

// Express Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('PORT', process.env.PORT || 3000);
app.set("BASE_URL", process.env.BASE_URL || "localhost");

if (process.env.NODE_ENV === "dev") {
    console.log("Development mode");
    app.use("/dev/api", UserModule);
}
else {
    app.get('/api', UserModule);
}

app.get('/ping', (req: Request, res: Response) => {
    res.send('pong');
});


const startServer = async () => {
    try {

        // console.log("Db connected");
        const port: Number = app.get('PORT');
        const baseURL: String = app.get("BASE_URL");
        server.listen(port, (): void => {
            console.log("Server is listening", port);
        });
        connectDB();
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();


//cron job to keep the render server live (remove this if you are not using render for hosting)
cron.schedule("*/5 * * * *", () => {
    console.log("Sending scheduled request at", new Date().toLocaleDateString(), "at", `${new Date().getHours()}:${new Date().getMinutes()}`);
    request(`${process.env.SELF_URL}`, function (error: Error, response: any) {
        if (!error && response.statusCode == 200) {
            console.log("server: im okay");
        }
    });
    request(`${process.env.ML_API_URL}`, function (error: Error, response: any) {
        if (!error && response.statusCode == 200) {
            console.log("ml: im okay");
        }
    }
    );
});



export default server;
