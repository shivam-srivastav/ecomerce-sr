const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
    profile_pic: { type: Buffer },
});

const ClassroomSchema = new Schema({
    class_name: { type: String },
    associate_teacher: { type: String },
    students: { type: String }
});

const AttendenceSchema = new Schema({
    class_id: { type: String },
    lecture:{type:Number},
    rawImg: { type: Buffer },
    data: { type: String }
});

const User = mongoose.model("User", UserSchema);
const Classroom = mongoose.model("Classroom", ClassroomSchema);
const Attendence = mongoose.model('Attendence', AttendenceSchema);

module.exports = {
    User,
    Classroom,
    Attendence
}