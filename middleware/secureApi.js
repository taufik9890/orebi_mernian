const secureApi =(req, res, next)=>{
    console.log('hoise', req.headers);
    if(req.headers.authorization == "3sw20aYo'?Nq"){
        next()
    }
    else{
        res.send({error:'invalid api'})
    }
}
module.exports = secureApi
// ekhane next() er kaaj hocche permission pawar pore jaite deya ke bole 