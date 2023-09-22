import express from "express";
import cors from "cors";
import { router } from '../routes/user.js';

class Server {

    constructor(){
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.userPath = '/api/user';

        // Middlewares
        this.middlewares();
        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        // Cors 
        this.app.use(cors());
        
        //Lectura y parseo de body
        this.app.use( express.json() );

        // Carperta publica
        this.app.use(express.static("public"));
    }

    routes(){
        this.app.use(this.userPath, router);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto ${this.port}`)
        })
    }

}

export{ Server }
