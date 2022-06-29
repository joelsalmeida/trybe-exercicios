import express from 'express';
import routes from './routes';
import createConnection from './models/connection';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this._middlewares();
    this._routes();

    createConnection();
  }

  private _middlewares(): void {
    this.express.use(express.json());
  }

  private _routes() {
    this.express.use(routes);
  }
}

export default App;
