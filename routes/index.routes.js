import { Router } from "express";
import {connection, schemas} from "../models/index.js";
import { auth } from "./middlewares.js";

const router = Router();

router.get("/", [auth],async (req, res) => {
    const Company = connection.model("companies", schemas.company);
    const companies = await Company.find();
    res.render("index", {data : {
        companies,
        user_type: req.user_type,
        user_id: req.user_id
    }});
})

router.get("/home",[auth], async (req, res) => {
    res.render("index");
})

export default router;