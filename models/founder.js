import db from 'mongoose';
const { Schema } = db;

export const founderSchema = new Schema({
    name:{
        type: Schema.Types.String,
        required: false
    },
    email:{
        type: Schema.Types.String,
        required: false
    },
    contact_number:{
        type: Schema.Types.Number,
        required: false
    },
    is_govt_auth:{
        type: Schema.Types.Boolean,
        required: false
    },
    company_portfolio:{
        type: Schema.Types.ObjectId,
        required: false
    },
    user_id:{
        type: Schema.Types.ObjectId,
        required: false
    }
},{ collection: "founders" });