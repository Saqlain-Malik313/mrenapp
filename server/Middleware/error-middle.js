const errormiddleware =(err,req,res,next)=>{
    const status= err.status||500;
    const message= err.message ||"backend Error";
    const extradetails= err.extradetails||"Error from BACKEND";

    res.status(status).json({message,extradetails})

}

module.exports= errormiddleware;