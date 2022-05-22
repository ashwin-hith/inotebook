const jwt = require('jsonwebtoken');


const JWT_SECRET="chinnu"



const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        return res.status(401).send({error:"Please authenticate using a valid Token"});
    }
    try {
    const data=jwt.verify(token,JWT_SECRET)
    req.user=data.user;
    next(); //this is used to execute the remaining part in the auth.js means after this whatever fucntion is present it executes
    } catch (error) {
        res.status(401).send({error:"Please autenticate using a Valid Token"})
    }
}

module.exports=fetchuser;