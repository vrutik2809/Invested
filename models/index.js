import db from 'mongoose';
import { founderSchema } from './founder.js';
import { investorSchema } from './investor.js';
import { companySchema } from './companies.js';
import { userSchema } from './user.js';
import dotenv from "dotenv";
dotenv.config();
export const connection = db.createConnection(process.env.DB_URL,{useNewUrlParser : true});
export const schemas = {
    founder : founderSchema,
    investor : investorSchema,
    company : companySchema,
    user : userSchema
}