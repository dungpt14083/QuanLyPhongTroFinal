const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thucnguyen1907:thucnguyen1907@cluster0.k8cgd.mongodb.net/quanlyphongtro');
const dienNuocSchema = new mongoose.Schema({
    idthuephong: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ThuePhong'
    },
    iddichvu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DichVu'
    },
    tungay: 'Date',
    denngay: 'Date',
    chisodiencu: 'Number',
    chisodienmoi: 'Number',
    chisonuoccu: 'Number',
    chisonuocmoi: 'Number',
    dongia: 'String',
    dathanhtoan: 'String',
});
const DienNuoc = mongoose.model('DienNuoc', dienNuocSchema);
module.exports = DienNuoc;