import { Router } from 'express';
//Controller empleado
import {
    getEmpleados,
    getOneEmpleado,
    postEmpleado,
    putEmpleado,
    deleteEmpleado
} from '../controllers/empleados.controllers.js';

const router = Router();

router.get("/empleados", getEmpleados)
router.get("/empleados/:id", getOneEmpleado)
router.post("/empleados", postEmpleado)
router.patch("/empleados/:id", putEmpleado)
router.delete("/empleados/:id", deleteEmpleado)

export default router;