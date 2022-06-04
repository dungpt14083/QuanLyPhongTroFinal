const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thucnguyen1907:thucnguyen1907@cluster0.k8cgd.mongodb.net/quanlyphongtro');
const thuePhongSchema = mongoose.Schema({
    idphong: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Phong'
    },
    idkhachhang: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KhachHang'
    },
    giaphong: 'Number',
    tiencoc: 'Number',
    ngaythue: 'Date',
    ngaytra: 'Date',
    tienthanhtoan: 'Number'
});
const ThuePhong = mongoose.model('ThuePhong', thuePhongSchema);
module.exports = ThuePhong;