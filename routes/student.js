import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken'
import {getAllStudents, createStudent, deleteStudent, updateStudent, filterByDiv} from '../controllers/student.js';
import StudentData from '../models/student.js';
import {verifyToken} from "../middleware/middleware.js"

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json()


// below function takes body and call back function as parameter
router.get("/",verifyToken, urlencodedParser, getAllStudents);
router.post("/",verifyToken,jsonParser,urlencodedParser, createStudent);
router.delete('/:id',verifyToken,urlencodedParser, deleteStudent)
router.put("/:id",verifyToken,urlencodedParser, updateStudent)
router.get("/findByDiv",verifyToken,urlencodedParser, filterByDiv)



export default router;
