const Cataloges = [
        {
            name: 'Cà Phê', 
            path: 'coffee',
            TypeCatalogParent: "",
            img: ('../../images/coffee/sp2.jpg'),
            sanpham: 10,
            discript: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.'
        },
        {
            name: "Cà Phê Việt Nam", 
            path: 'Cà-phê-việt-nam', 
            TypeCatalogParent: "Cà Phê",
            sanpham: 10,
            img: ('../../images/coffee/sp4.jpg'),
            discript: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.'
        }, 
        {
            name: 'Cà Phê Máy', 
            path: 'Cà-phê-máy', 
            TypeCatalogParent: "Cà Phê",
            sanpham: 10,
            img: ('../../images/coffee/sp8.jpg'),
            discript: 'Cà phê sữa Espresso là một lon cà phê sữa giải khát với hương vị cà phê đậm đà từ 100% cà phê Robusta cùng vị sữa béo nhẹ cho bạn một trải nghiệm hương vị cà phê hoàn toàn mới.'
        }, 
        {
            name: 'Cold Brew', 
            path: 'Cold-Brew', 
            TypeCatalogParent: "Cà Phê",
            sanpham: 10,
            img: ('../../images/coffee/sp19.jpg'),
            discript: 'Thanh mát và cân bằng với hương vị cà phê nguyên bản 100% Arabica Cầu Đất cùng sữa tươi thơm béo cho từng ngụm tròn vị, hấp dẫn.'
        },
        {
        name: 'CloudFee', 
        path: 'cloudfee',
        TypeCatalogParent: "",
        sanpham: 10,
        img: ('../../images/cloudfee/sp1.jpg'),
        discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        },
        {
            name: "Creamy", 
            path: 'creamy', 
            TypeCatalogParent: "CloudFee",
            sanpham: 10,
            img: ('../../images/cloudfee/sp2.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            name: 'Creme Brulee', 
            path: 'Creme-Brulee', 
            TypeCatalogParent: "CloudFee",
            sanpham: 10,
            img: ('../../images/cloudfee/sp5.jpg'), 
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            name: 'Đoàn viên', 
            path: 'Đoàn-Viên',
            TypeCatalogParent: "CloudFee",
            sanpham: 10,
            img: ('../../images/cloudfee/sp7.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        },
        {
        name: 'Trà', 
        path: 'tea',
        TypeCatalogParent: "",
        img: ('../../images/house/sp12.jpg'),
        discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        },
        {
            name: "Trà trái cây", 
            path: 'Trà-trái-cây',
            TypeCatalogParent: "Trà",
            sanpham: 10,
            img: ('../../images/tra/sp1.jpg'), 
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            name: 'Trà sữa Macchiato', 
            path: 'Trà-sữa-Machiato', 
            TypeCatalogParent: "Trà",
            sanpham: 10,
            img: ('../../images/tra/sp10.jpg') ,
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        },
        {
            name: 'Hi-Tea Healthy', 
            path: 'hitea',
            TypeCatalogParent: "",
            sanpham: 10,
            img: ('../../images/hitea/sp1.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        },
        {
            name: "Hi-Tea Trà", 
            path: 'Hi-Tea-Trà', 
            TypeCatalogParent: "Trà",
            sanpham: 10,
            img: ('../../images/hitea/sp2.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            name: 'Hi-Tea đá tuyết', 
            path: 'Hi-Tea-đá-tuyết', 
            sanpham: 10,
            TypeCatalogParent: "Trà",
            img: ('../../images/hitea/sp7.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            name: 'Hi-Tea Bling Bling', 
            path: 'Hi-Tea-bling-bling', 
            sanpham: 10,
            TypeCatalogParent: "Trà",
            img: ('../../images/hitea/sp8.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            name: "Bánh & Snack", 
            path: 'banh', 
            sanpham: 10,
            img: ('../../images/banh/sp2.jpg'),
            TypeCatalogParent: "",
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        },
        {
            name: "Bánh mặn", 
            path: 'Bánh-Mặn', 
            TypeCatalogParent: "Bánh & Snack",
            sanpham: 10,
            img: ('../../images/banh/sp3.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            name: 'Bánh Ngọt', 
            path: 'Bánh-Ngọt', 
            TypeCatalogParent: "Bánh & Snack",
            sanpham: 10,
            img: ('../../images/banh/sp8.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            name: 'Snack', 
            path: 'Snack', 
            TypeCatalogParent: "Bánh & Snack",
            sanpham: 10,
            img: ('../../images/banh/sp18.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        },
        {
            name: "Tại nhà", 
            path: "Home",
            TypeCatalogParent: "",
            sanpham: 10,
            img: ('../../images/house/sp3.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        },
        {
            name: "Cà phê tại nhà", 
            path: 'Cà-Phê-Tại-Nhà', 
            sanpham: 10,
            TypeCatalogParent: "Tại nhà",
            img: ('../../images/house/sp3.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            name: "Trà Tại Nhà", 
            path: "Trà-Tại-Nhà", 
            sanpham: 10,
            TypeCatalogParent: "Tại nhà",
            img: ('../../images/house/sp19.jpg'),
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }, 
        {
            id: 7,
            name: "Thức uống khác", 
            path: 'difference',
            sanpham: 10,
            TypeCatalogParent: "Thức uống khác",
            img: ('../../images/difference/sp2.jpg'), 
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        },
        {
            name: "Chocolate", 
            path: 'Chocolate', 
            sanpham: 10,
            TypeCatalogParent: "Thức uống khác",
            img: ('../../images/difference/sp2.jpg'), 
            discript: 'Bắt đầu ngày mới với xíu đắng nhẹ của cà phê phin truyền thống kết hợp Espresso Ý, kèm chút ngọt ngào từ kem sữa, thêm ấn tượng bởi vị dừa lá dứa thơm béo đậm chất Việt Nam'
        }
]

export default Cataloges