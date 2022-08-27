import { Router } from "express";
import {connection, schemas} from "../models/index.js";
import { auth } from "./middlewares.js";

const router = Router();

router.get("/company/create",[auth],async (req, res) => {
    res.render("company_form",{
        data:{
            owner_id: req.user_id,
        }
    });
})

router.post("/company/create",[auth],async (req, res) => {
    const Company = connection.model("companies",schemas.company);
    const company = await new Company(req.body).save();
    res.status(200).json(company);
})

router.get("/company/:id",[auth],async (req, res) => {
    const Company = connection.model("companies",schemas.company);
    const company = await Company.findById(req.params.id);
    res.render("company",{
        data: {
            user_id: req.user_id,
            user_type: req.user_type,
            company_id: company._id,
            company_owner_id: company.owner_id,
            name: company.name,
            location: company.location,
            description: company.description,
            revenue: company.revenue,
            discussions: company.discussions,
        }
    });
})



export default router;