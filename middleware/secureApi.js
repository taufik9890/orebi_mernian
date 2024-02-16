const secureApi =(req, res, next)=>{
    console.log('hoise');
    next()
}
module.exports = secureApi
// ekhane next() er kaaj hocche permission pawar pore jaite deya ke bole 