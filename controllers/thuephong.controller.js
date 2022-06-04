var ThuePhong = require('../models/thuephong.model');
exports.getListTP = async (req,res,next)=>{
    let listTP = await ThuePhong.find();
    console.log(listTP);
    res.render('./thuephong/list',{
        listTP: listTP
    });
}
exports.getAddTP = async (req,res,next)=>{
    res.render('./thuephong/add');
}
exports.postAddTP = (req,res,nexr)=>{
    console.log(req.body);
const thuephong = new ThuePhong(
    {

    }
)
}