import db from 'mongoose';
const { Schema } = db;

export const companySchema = new Schema({
    name:{
        type: Schema.Types.String,
        required: false
    },
    location:{
        type: Schema.Types.String,
        required: false
    },
    description:{
        type: Schema.Types.String,
        required: false
    },
    revenue:{
        type: Schema.Types.Number,
        required: false
    },
    discussions:{
        type: Schema.Types.Array,
        required: false
    },
    owner_id:{
        type: Schema.Types.String,
        required: false
    }
},{ collection: "companies" });