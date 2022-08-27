import db from 'mongoose';
const { Schema } = db;

export const userSchema = new Schema({
    email:{
        type: Schema.Types.String,
        required: false
    },
    password:{
        type: Schema.Types.String,
        required: false
    },
},{ collection: "users" });