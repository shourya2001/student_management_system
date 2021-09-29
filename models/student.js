import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: String,
    div: String,
    year: String,
    regId:Number
});

const student = mongoose.model('student',studentSchema);


export default student;