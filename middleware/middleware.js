export function extractToken (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}

export function verifyToken (req,res,next){
    const token = extractToken(req)
    jwt.verify(token, 'secret', function(err, decoded) {
        if(err){
            return res.status(403).json({"message":"invalid user"})
        }else{
            next();
        }
        console.log(decoded.foo) // bar
    });
}