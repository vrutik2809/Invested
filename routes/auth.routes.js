import { Router } from "express";
import { connection, schemas } from "../models/index.js";

const router = Router();


router.get("/auth/create", async (req, res) => {
    res.render("signup");
})

router.post("/auth/create", async (req, res) => {

    const User = connection.model("users", schemas.user);
    const data = await new User(req.body).save();

    res.status(200).json(data);
})

router.get("/auth/login", async (req, res) => {
    res.render("login");
})

router.post("/auth/login", async (req, res) => {
    const User = connection.model("users", schemas.user);
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if(user.password === req.body.password){
            res.cookie("user_type", req.body.user_type);
            res.cookie("user_id", user._id);
            res.status(200).json(user);
        }
        else{
            res.status(400).json({message: "Invalid Password"});
        }
    }
    else {
        res.status(404).json({ message: "User not found" });
    }

})

export default router;