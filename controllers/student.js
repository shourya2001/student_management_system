import StudentData from '../models/student.js';

export const getAllStudents =async (req,res)=>{
    try {
        const allStudents = await StudentData.find()
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const createStudent = async (req,res)=>{
    const student = req.body;
    console.log(req.body);
    try {
        const newStudent = await StudentData.create(student);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({message : error.message})
    }
}

export const deleteStudent = async (req,res)=>{
    const id = req.params.id;
    try {
        await StudentData.findByIdAndRemove(id).exec();
        res.send("Successfully Deleted")
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"error"})
    }
}

export const updateStudent = async (req,res)=>{
    const id = req.params.id;
    const updatedStudent = req.body
    try{
        const updatedData = await StudentData.findByIdAndUpdate(id,updatedStudent);
        console.log(updatedData);
        res.status(201).json(updatedData)
    } catch(error){
        console.log(error);
        res.status(400).json({message:"error"})
    }
}

export const filterByDiv = async (req,res)=>{
    try{
        const div = req.query.div;
        const data = await StudentData.find({div});
        res.status(201).json(data)
    } catch (err){
        console.log(err)
        res.status(400).json({message:"error"})
    }
}