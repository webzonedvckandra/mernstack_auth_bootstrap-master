import express  from "express";
const router=express.Router();
import {singup,sigin} from '../controller/userController.js';

router.post('/signup',singup);
router.post('/sigin',sigin);


export default router;

