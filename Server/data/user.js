import bcrypt from 'bcryptjs';
const users = [
    {
        name: 'Trần Quốc Thịnh',
        phone: '0978567666',
        birthday: '28-10-2001', 
        gender: 'Nam', 
        chucvu: 'Quản Lý', 
        chinhanh: 'HCM The Hub - Điện Biên Phủ', 
        address: '277 Bưng Ông Thoàn, P. Tăng Nhơn Phú B, Quận 9, TP.HCM', 
        password: bcrypt.hashSync('0978568666', 10), 
    },
    // {
    //     name: 'Trần Đăng Nguyễn Bảo',
    //     phone: '0978567684',
    //     birthday: '28-10-2001', 
    //     gender: 'Nam', 
    //     address: '277 Bưng Ông Thoàn, P. Tăng Nhơn Phú B, Quận 9, TP.HCM', 
    //     password: bcrypt.hashSync('0978567684', 10), 
    // },
    // {
    //     name: 'Nguyễn thị Bích Thảo',
    //     phone: '0978568686',
    //     birthday: '28-10-2001', 
    //     gender: 'Nam', 
    //     chucvu: 'Quản Lý', 
    //     chinhanh: 'HCM Trung Sơn', 
    //     address: '277 Bưng Ông Thoàn, P. Tăng Nhơn Phú B, Quận 9, TP.HCM', 
    //     password: bcrypt.hashSync('0978568686', 10), 
    // },
    // {
    //     name: 'Admin',
    //     phone: 'admin',
    //     birthday: '28-10-2001', 
    //     gender: 'Nam', 
    //     address: '277 Bưng Ông Thoàn, P. Tăng Nhơn Phú B, Quận 9, TP.HCM', 
    //     password: bcrypt.hashSync('admin',10),
    //     isAdmin: true 
    // },
]

export default users;