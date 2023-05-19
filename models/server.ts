import express from 'express';
import router from '../router';
import { tipoCambioRouter } from '../routes';

class Server {
  private app: express.Application;

  private port: string;

  private apiPaths = {
    tipoCambio: '/api/v1/tipo_cambio',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '9001';
    this.routes();
  }

  routes() {
    this.app.use(router);
    this.app.use(this.apiPaths.tipoCambio, tipoCambioRouter.default);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`🟢 Server running on port ${this.port}`);
    });
  }
}

export default Server;
