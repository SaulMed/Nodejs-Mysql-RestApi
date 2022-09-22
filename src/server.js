import express, { json } from 'express';
import './config.js';

//Routes
import routesIndex from './routes/index.routes.js';
import routesEmpleados from './routes/empleados.routes.js';

const app = express();

//Config
app.use(express.json())
app.set("PORT", process.env.PORT || 3000)

//Routes
app.use(routesIndex);
app.use("/api",routesEmpleados);

//Middlewares
app.use((req,res)=>{
    res.status(404).json({
        status:"ruta no encontrada."
    })
})

export default app;