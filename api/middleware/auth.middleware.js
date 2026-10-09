const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET ||  'bank-demo-secret';

function authenticateToken(req,res,next){

    const authHeader = req.headers.authorization;

    const token = authHeader?.startsWith('Bearer ')
    ? authHeader.substring(7) : null;

    // Rejectt request without a token
    if(!token){
        return res.status(401).json({
            success:false,
            message:'Authentication token required'

        })
    }
    try{
        ///verify the JWT token
        const decoded = jwt.verify(token,JWT_SECRET);

        // make logged-in user information available
        req.user = decoded;

        //Allow the request to continue
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'Invalid or expired token'
        })
    }
}

module.exports = {authenticateToken}