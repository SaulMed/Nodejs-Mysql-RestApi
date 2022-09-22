import { Router } from 'express';
//Controller Index
import { pong } from '../controllers/index.controllers.js';

const router = Router();

router.get("/ping", pong);


export default router;