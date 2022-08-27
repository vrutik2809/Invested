export const auth = (req,res,next) => {
    if(req.cookies.user_type){
        req.user_type = req.cookies.user_type
        req.user_id = req.cookies.user_id;
    }
    else{
        req.user_type = "user";
        req.user_id = "user_id";
    }
    next();
}