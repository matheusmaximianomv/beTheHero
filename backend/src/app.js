import express from 'express';
import cors from 'cors';
import Youch from 'youch';
import { errors } from 'celebrate';

import 'express-async-errors';

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(errors);
    this.server.use(async (err, req, res, next) => {
      const errorsYouch = await new Youch(err, req).toJSON();

      return res.status(500).json(errorsYouch);
    });
  }
}

export default new App().server;
