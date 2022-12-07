import bcrypt from 'bcryptjs';
const users = [
    {
        name: 'Trần Đăng Nguyễn Bảo',
        phone: '0978567684',
        birthday: '28/10/2001', 
        gender: 'Nam', 
        address: '277 Bưng Ông Thoàn, P. Tăng Nhơn Phú B, Quận 9, TP.HCM', 
        password: bcrypt.hashSync('0978567684', 10), 
    },
    {
        name: 'Admin',
        // phone: '0978567684',
        // birthday: '28/10/2001', 
        // gender: 'Nam', 
        // address: '277 Bưng Ông Thoàn, P. Tăng Nhơn Phú B, Quận 9, TP.HCM', 
        password: bcrypt.hashSync('admin',10),
        isAdmin: true 
    },
]

export default users;