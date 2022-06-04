var LoaiPhong = require('../models/loaiphong.model');
exports.getListLP = async function(req, res) {
    let listLP =await LoaiPhong.find();
    console.log(listLP);
    res.render('./loaiphong/list', {listLP: listLP});
};
exports.getAddLP = function(req, res) {
    res.render('./loaiphong/add');
};
exports.postAddLP = async function(req, res) {
    const loaiphong = new LoaiPhong({
        tenloaiphong: req.body.tenloaiphong
    });
    await loaiphong.save(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('Them thanh cong');
            res.redirect('/loaiphong/list');
        }
    });

};

exports.getEditLP = async function(req, res) {
    let loaiphong = await LoaiPhong.findById(req.params.id).exec().catch(function (err) {
        console.log(err);
    });
   if (loaiphong ==null) {
       res.send('Khong tim thay loai phong');
   }
   else {
       res.render('./loaiphong/edit', {loaiphong: loaiphong});
   }
};
exports.postEditLP =  function(req, res) {
    let dieukien = {
        _id: req.params.id
    };
    console.log(dieukien);
    let data = {
        tenloaiphong: req.body.tenloaiphong
    };
    console.log(data);
    LoaiPhong.updateOne(dieukien, data, function (err) {
        if (err) {
            res.send('Update ERROR !' + err.message);
        }

    });
    console.log('Sua thanh cong');
    res.redirect('/loaiphong/list');
};
exports.getDeleteLP = async function(req, res) {
    let id = req.params.id;
    let loaiphong = await LoaiPhong.findById(id).exec().catch(function (err) {
        console.log(err);
    });
    if (loaiphong ==null) {
        res.send('Khong tim thay loai phong');
    }
    else {
        res.render('./loaiphong/delete', {loaiphong: loaiphong});
    }
};
exports.postDeleteLP = async function(req, res) {
    let dieukien = {
        _id: req.body.id
    };
    await LoaiPhong.deleteOne(dieukien, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('Xoa thanh cong');
            res.redirect('./loaiphong/list');
        }
    });
};