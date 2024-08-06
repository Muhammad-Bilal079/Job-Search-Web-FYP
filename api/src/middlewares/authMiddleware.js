import jwt from 'jsonwebtoken'

//this auth middle ware can verify token
let authMiddleware = (req, res, next) => {
    var token = req.headers.authorization.split(" ")[1]

    try {
        var decoded = jwt.verify(token, process.env.JWT_Token);
           console.log(decoded) 
           //yahan per role jab maloom hoga jab hum postman say login ka jwt autherization beareer main passs karain gay
           //or sirf login kay token say hum us role ko pura access kar saktay hain
           req.role = decoded.role
           req.email = decoded.user
        next()

    } catch (error) {
        res.status(403).json({
            msg:error
        })
    }

}

export default authMiddleware