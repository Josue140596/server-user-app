import express, { Application } from 'express';
import cors from "cors";
import router from '../routes/users.router';
import { dbConnection } from '../DB/config';
class Server {
  //Attributes
  app: Application;
  port: any;
  usersPath: string;
  //Constructor
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';
    //Connect DB
    this.connectDB();
    //Middlewares
    this.middlewares();
    //Routes app
    this.routes();
  }
  //Methods
  async connectDB() {
    await dbConnection();
  }
  middlewares (){
    //CORS
    this.app.use(cors());
    // Reading and parse body
    this.app.use(express.json());
  }
  routes() {
    this.app.use(this.usersPath, router)
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`=> Server is running at port: ${this.port}`);
    });
  }
}

export default Server