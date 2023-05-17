import express from 'express';

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '9001';
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log(`🟢 Server running on port ${this.port}`)
        });
    }
}

export default Server;
