import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import UserRoute from "./routes/UserRoute.js";

const App = Express();
App.use(bodyParser.urlencoded({extended: true}));
App.use(bodyParser.json());
App.use(cors());
App.use(UserRoute);

App.listen(8080, () => console.log("Server is running"));