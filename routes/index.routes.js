import { Router } from "express";
import {connection, schemas} from "../models/index.js";

const router = Router();

router.get("/", async (req, res) => {
    const Company = connection.model("companies", schemas.company);
    const companies = await Company.find();
    res.render("index", {data : {
        companies,
        user_type: req.query.user_type
    }});
})

router.get("/home", async (req, res) => {
    // const Founder = connection.model("founders",schemas.founder);
    // const data = await Founder.find();
    // console.log(data);
    // const Investor = connection.model("investors",schemas.investor);
    // const data = await Investor.find();
    // console.log(data);
    // const User = connection.model("users",schemas.user);
    // const data = await User.find();
    // console.log(data);
    // const Company = connection.model("companies",schemas.company);
    // const data = await Company.find();
    // console.log(data);
    res.render("index");
})

export default router;