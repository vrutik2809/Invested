import db from 'mongoose';
const { Schema } = db;

export const investorSchema = new Schema({
    name:{
        type: Schema.Types.String,
        required: false
    },
    company_invested:{
        type: Schema.Types.Array,
        required: false
    },
    user_id:{
        type: Schema.Types.ObjectId,
        required: false
    }
},{ collection: "investors" });