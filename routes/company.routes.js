import { Router } from "express";
import {connection, schemas} from "../models/index.js";

const router = Router();

router.get("/company/:id",async (req, res) => {
    res.render("company");
})

export default router;