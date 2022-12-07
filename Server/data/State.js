const State = [
    {
        country_id: 1, 
        name: 'TP. Hồ Chí Minh', 
        district: [
            {
                district_id: 8, 
                country_id: 1,
                name: 'Quận/Huyện', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 1,
                        name: 'HCM Trung Sơn', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '114 Đường số 9A, Bình Hưng, Bình Chánh, Hồ Chí Minh', 
                        image: require('../../images/chinhanh/hcm-trungson.jpg'),
                    }, 
                    {
                        street_id: 1, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM The Hub - Điện Biên Phủ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '195/10 Điện Biên Phủ, Phường 15, Quận Bình Thạnh, Tp.HCM',
                        image: require('../../images/chinhanh/dienbienphu.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM Nguyễn Gia Trí (Đường D2)', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '157 Nguyễn Gia Trí, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam',
                        image: require('../../images/chinhanh/nguyengiatri.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM Nguyễn Xí', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '184 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh',
                        image: require('../../images/chinhanh/nguyenxi.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM Nguyễn Xí', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '184 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh',
                        image: require('../../images/chinhanh/nguyenxi.jpg'),
                    }, 
                    {
                        street_id: 4, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM Phan Văn Trị 3', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '190 Phan Văn Trị, Phường 11, Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam',
                        image: require('../../images/chinhanh/phanvantri.jpg'),
                    }, 
                    {
                        street_id: 1, 
                        district_id: 3, 
                        country_id: 1,
                        name: 'HCM Tỉnh Lộ 10', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '516 Tỉnh Lộ 10, Bình Trị Đông, Bình Tân, Hồ Chí Minh',
                        image: require('../../images/chinhanh/tinhlo10.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 3, 
                        country_id: 1,
                        name: 'HCM Đường số 22', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '9-11 Đường số 22, Q. Bình Tân, Hồ Chí Minh',
                        image: require('../../images/chinhanh/hcmdongso22.jpg'),
                    }, 
                    {
                        street_id: 1, 
                        district_id: 4, 
                        country_id: 1,
                        name: 'HCM Phan Huy Ích', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '403 Phan Huy Ích, Phường 14, Gò Vấp, Hồ Chí Minh',
                        image: require('../../images/chinhanh/phanhuyich.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 4, 
                        country_id: 1,
                        name: 'HCM Phạm Văn Chiêu', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '240 Phạm Văn Chiêu, Phường 9, Gò Vấp, Hồ Chí Minh',
                        image: require('../../images/chinhanh/phamvanchieu.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 4, 
                        country_id: 1,
                        name: 'HCM Quang Trung', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '293 Quang Trung, Phường 10, Gò Vấp, Hồ Chí Minh',
                        image: require('../../images/chinhanh/quangtrung.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 4, 
                        country_id: 1,
                        name: 'HCM Nguyễn Văn Lượng', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '258 Nguyễn Văn Lượng, Phường 17, Gò Vấp, Hồ Chí Minh',
                        image: require('../../images/chinhanh/nguyenvanluong.jpg'),
                    }, 
                    {
                        street_id: 1, 
                        district_id: 5, 
                        country_id: 1,
                        name: 'HCM Nguyễn Ảnh Thủ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '93/5B Nguyễn Ảnh Thủ, Trung Chánh, Hóc Môn, Hồ Chí Minhh', 
                        image: require('../../images/chinhanh/nguyenanhthu.jpg'),
                    }, 
                    {
                        street_id: 1, 
                        district_id: 6, 
                        country_id: 1,
                        name: 'HCM Hoa Hồng', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '43 Hoa Hồng, Phường 7, Phú Nhuận, Hồ Chí Minh', 
                        image: require('../../images/chinhanh/hcmhoahong.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 6, 
                        country_id: 1,
                        name: 'HCM Hoa Sứ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '1 Hoa Sứ, Phường 7, Phú Nhuận, Hồ Chí Minh', 
                        image: require('../../images/chinhanh/hcmhoasu.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 6, 
                        country_id: 1,
                        name: 'HCM Huỳnh Văn Bánh', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '68 Huỳnh Văn Bánh, Phường 15, Phú Nhuận, Hồ Chí Minh', 
                        image: require('../../images/chinhanh/huynhvanluong.jpg'),
                    },
                ]
            },
            {
                district_id: 1, 
                country_id: 1, 
                name: 'Bình Chánh', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 1,
                        name: 'HCM Trung Sơn', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '114 Đường số 9A, Bình Hưng, Bình Chánh, Hồ Chí Minh', 
                        image: require('../../images/chinhanh/hcm-trungson.jpg'),
                    }, 
                ]
            },
            {
                district_id: 2, 
                country_id: 1, 
                name: 'Bình Thạnh', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM The Hub - Điện Biên Phủ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '195/10 Điện Biên Phủ, Phường 15, Quận Bình Thạnh, Tp.HCM',
                        image: require('../../images/chinhanh/dienbienphu.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM Nguyễn Gia Trí (Đường D2)', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '157 Nguyễn Gia Trí, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam',
                        image: require('../../images/chinhanh/nguyengiatri.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM Nguyễn Xí', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '184 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh',
                        image: require('../../images/chinhanh/nguyenxi.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM Nguyễn Xí', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '184 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh',
                        image: require('../../images/chinhanh/nguyenxi.jpg'),
                    }, 
                    {
                        street_id: 4, 
                        district_id: 2, 
                        country_id: 1,
                        name: 'HCM Phan Văn Trị 3', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '190 Phan Văn Trị, Phường 11, Bình Thạnh, Thành phố Hồ Chí Minh, Vietnam',
                        image: require('../../images/chinhanh/phanvantri.jpg'),
                    }, 
                ]
            },
            {
                district_id: 3, 
                country_id: 1, 
                name: 'Bình Tân', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 3, 
                        country_id: 1,
                        name: 'HCM Tỉnh Lộ 10', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '516 Tỉnh Lộ 10, Bình Trị Đông, Bình Tân, Hồ Chí Minh',
                        image: require('../../images/chinhanh/tinhlo10.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 3, 
                        country_id: 1,
                        name: 'HCM Đường số 22', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '9-11 Đường số 22, Q. Bình Tân, Hồ Chí Minh',
                        image: require('../../images/chinhanh/hcmdongso22.jpg'),
                    }, 
                    
                ]
            },
            {
                district_id: 4, 
                country_id: 1, 
                name: 'Gò Vấp', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 4, 
                        country_id: 1,
                        name: 'HCM Phan Huy Ích', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '403 Phan Huy Ích, Phường 14, Gò Vấp, Hồ Chí Minh',
                        image: require('../../images/chinhanh/phanhuyich.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 4, 
                        country_id: 1,
                        name: 'HCM Phạm Văn Chiêu', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '240 Phạm Văn Chiêu, Phường 9, Gò Vấp, Hồ Chí Minh',
                        image: require('../../images/chinhanh/phamvanchieu.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 4, 
                        country_id: 1,
                        name: 'HCM Quang Trung', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '293 Quang Trung, Phường 10, Gò Vấp, Hồ Chí Minh',
                        image: require('../../images/chinhanh/quangtrung.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 4, 
                        country_id: 1,
                        name: 'HCM Nguyễn Văn Lượng', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '258 Nguyễn Văn Lượng, Phường 17, Gò Vấp, Hồ Chí Minh',
                        image: require('../../images/chinhanh/nguyenvanluong.jpg'),
                    }, 
                ]
            },
            {
                district_id: 5, 
                country_id: 1, 
                name: 'Hóc Môn', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 5, 
                        country_id: 1,
                        name: 'HCM Nguyễn Ảnh Thủ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '93/5B Nguyễn Ảnh Thủ, Trung Chánh, Hóc Môn, Hồ Chí Minhh', 
                        image: require('../../images/chinhanh/nguyenanhthu.jpg'),
                    }, 
                ]
            },
            {
                district_id: 6, 
                country_id: 1, 
                name: 'Phú Nhuận', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 6, 
                        country_id: 1,
                        name: 'HCM Hoa Hồng', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '43 Hoa Hồng, Phường 7, Phú Nhuận, Hồ Chí Minh', 
                        image: require('../../images/chinhanh/hcmhoahong.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 6, 
                        country_id: 1,
                        name: 'HCM Hoa Sứ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '1 Hoa Sứ, Phường 7, Phú Nhuận, Hồ Chí Minh', 
                        image: require('../../images/chinhanh/hcmhoasu.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 6, 
                        country_id: 1,
                        name: 'HCM Huỳnh Văn Bánh', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '68 Huỳnh Văn Bánh, Phường 15, Phú Nhuận, Hồ Chí Minh', 
                        image: require('../../images/chinhanh/huynhvanluong.jpg'),
                    }, 
                ]
            },
        ]
    },
    {
        country_id: 2, 
        name: 'Hà Nội', 
        district: [
            {
                district_id: 4, 
                country_id: 1,
                name: 'Quận/Huyện', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 2,
                        name: 'HN Nguyễn Văn Cừ   ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '149 Nguyễn Văn Cừ, Ngọc Lâm, Long Biên, Hà Nội', 
                        image: require('../../images/chinhanh/hn1.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 1, 
                        country_id: 2,
                        name: 'HN Vincom Mega Mall Smart City', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'L1-16A - Tầng L1 TTTM Vincom Mega Mall Smart City- Đường Đại Lộ Thăng Long, Phường Tây Mỗ, Quận Nam Từ Liêm', 
                        image: require('../../images/chinhanh/hn2.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 1, 
                        country_id: 2,
                        name: 'HN The Park Home  ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'Lô D12 KĐT, Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội', 
                        image: require('../../images/chinhanh/hn3.jpg'),
                    }, 
                    {
                        street_id: 4, 
                        district_id: 1, 
                        country_id: 2,
                        name: 'HN Trần Kim Xuyến ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'Ô số 01A1, Tầng 1, Chung cư E2-Chelsea Residences Trần Kim Xuyến, Khu ĐTM Yên Hòa, Cầu Giấy, Hà Nội, Việt Nam', 
                        image: require('../../images/chinhanh/hn4.jpg'),
                    }, 
                    {
                        street_id: 1, 
                        district_id: 2, 
                        country_id: 2,
                        name: 'HN Vincom Mega Mall Smart City', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'L1-16A - Tầng L1 TTTM Vincom Mega Mall Smart City- Đường Đại Lộ Thăng Long, Phường Tây Mỗ, Quận Nam Từ Liêm', 
                        image: require('../../images/chinhanh/hn5.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 2, 
                        country_id: 2,
                        name: 'HN Gardenia Hàm Nghi', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'Vinhomes The Botanica, B3-01 P. Hàm Nghi, Cầu Diễn, Nam Từ Liêm, Hà Nội', 
                        image: require('../../images/chinhanh/hn6.jpg'),
                    }, 
                    {
                        street_id: 1, 
                        district_id: 3, 
                        country_id: 2,
                        name: 'HN Xuân La ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '40 Xuân La, Tây Hồ, Hà Nội', 
                        image: require('../../images/chinhanh/hn7.jpg'),
                    }, 
                ]
            }, 
            {
                district_id: 1, 
                country_id: 2, 
                name: 'Cầu Giấy', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 2,
                        name: 'HN Nguyễn Văn Cừ   ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '149 Nguyễn Văn Cừ, Ngọc Lâm, Long Biên, Hà Nội', 
                        image: require('../../images/chinhanh/hn1.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 1, 
                        country_id: 2,
                        name: 'HN Vincom Mega Mall Smart City', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'L1-16A - Tầng L1 TTTM Vincom Mega Mall Smart City- Đường Đại Lộ Thăng Long, Phường Tây Mỗ, Quận Nam Từ Liêm', 
                        image: require('../../images/chinhanh/hn2.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 1, 
                        country_id: 2,
                        name: 'HN The Park Home  ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'Lô D12 KĐT, Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội', 
                        image: require('../../images/chinhanh/hn3.jpg'),
                    }, 
                    {
                        street_id: 4, 
                        district_id: 1, 
                        country_id: 2,
                        name: 'HN Trần Kim Xuyến ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'Ô số 01A1, Tầng 1, Chung cư E2-Chelsea Residences Trần Kim Xuyến, Khu ĐTM Yên Hòa, Cầu Giấy, Hà Nội, Việt Nam', 
                        image: require('../../images/chinhanh/hn4.jpg'),
                    }, 
                ]
            },
            {
                district_id: 2, 
                country_id: 2, 
                name: 'Nam Từ Liêm', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 2, 
                        country_id: 2,
                        name: 'HN Vincom Mega Mall Smart City', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'L1-16A - Tầng L1 TTTM Vincom Mega Mall Smart City- Đường Đại Lộ Thăng Long, Phường Tây Mỗ, Quận Nam Từ Liêm', 
                        image: require('../../images/chinhanh/hn5.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 2, 
                        country_id: 2,
                        name: 'HN Gardenia Hàm Nghi', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'Vinhomes The Botanica, B3-01 P. Hàm Nghi, Cầu Diễn, Nam Từ Liêm, Hà Nội', 
                        image: require('../../images/chinhanh/hn6.jpg'),
                    }, 
                ]
            },
            {
                district_id: 3, 
                country_id: 2, 
                name: 'Tây Hồ', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 3, 
                        country_id: 2,
                        name: 'HN Xuân La ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '40 Xuân La, Tây Hồ, Hà Nội', 
                        image: require('../../images/chinhanh/hn7.jpg'),
                    }, 
                ]
            },
        ]
    },
    {
        country_id: 3, 
        name: 'Đà Nẵng', 
        district: [
            {
                district_id: 3, 
                country_id: 3, 
                name: 'Quận/Huyện', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 3,
                        name: 'DAN Nguyễn Văn Linh', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '2 Nguyễn Văn Linh, Bình Hiên, Hải Châu, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn1.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 1, 
                        country_id: 3,
                        name: 'DAN Núi Thành', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '01 Núi Thành, Phường, Hải Châu, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn2.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 1, 
                        country_id: 3,
                        name: 'DAN Triệu Nữ Vương', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '9 Triệu Nữ Vương, Hải Châu 2, Hải Châu, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn3.jpg'),
                    }, 
                    {
                        street_id: 4, 
                        district_id: 1, 
                        country_id: 3,
                        name: 'DAN Nguyễn Chí Thanh', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '80A Nguyễn Chí Thanh, Hải Châu 1, Hải Châu, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn4.jpg'),
                    }, 
                    {
                        street_id: 1, 
                        district_id: 2, 
                        country_id: 3,
                        name: 'DAN Trần Hưng Đạo', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '461 Trần Hưng Đạo, An Hải Trung, Sơn Trà, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn5.jpg'),
                    }, 
                ]
            },
            {
                district_id: 1, 
                country_id: 3, 
                name: 'Quận Hải Châu', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 3,
                        name: 'DAN Nguyễn Văn Linh', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '2 Nguyễn Văn Linh, Bình Hiên, Hải Châu, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn1.jpg'),
                    }, 
                    {
                        street_id: 2, 
                        district_id: 1, 
                        country_id: 3,
                        name: 'DAN Núi Thành', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '01 Núi Thành, Phường, Hải Châu, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn2.jpg'),
                    }, 
                    {
                        street_id: 3, 
                        district_id: 1, 
                        country_id: 3,
                        name: 'DAN Triệu Nữ Vương', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '9 Triệu Nữ Vương, Hải Châu 2, Hải Châu, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn3.jpg'),
                    }, 
                    {
                        street_id: 4, 
                        district_id: 1, 
                        country_id: 3,
                        name: 'DAN Nguyễn Chí Thanh', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '80A Nguyễn Chí Thanh, Hải Châu 1, Hải Châu, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn4.jpg'),
                    }, 
                ]
            },
            {
                district_id: 2, 
                country_id: 3, 
                name: 'Quận Sơn Trà', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 2, 
                        country_id: 3,
                        name: 'DAN Trần Hưng Đạo', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '461 Trần Hưng Đạo, An Hải Trung, Sơn Trà, Đà Nẵng', 
                        image: require('../../images/chinhanh/dn5.jpg'),
                    }, 
                ]
            },
          ]
    }, 
    {
        country_id: 4, 
        name: 'Bà Rịa Vũng Tàu', 
        district: [
            {
                district_id: 3, 
                country_id: 4, 
                name: 'Quận/Huyện', 
                street : [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 4,
                        name: 'VT Ba Cu', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '5 Ba Cu, Phường 1, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu', 
                        image: require('../../images/chinhanh/vt1.jpg'),
                    },
                    {
                        street_id: 1, 
                        district_id: 2, 
                        country_id: 4,
                        name: 'BR Nguyễn Hữu Thọ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '76 Nguyễn Hữu Thọ, Phước Trung, Bà Rịa, Bà Rịa - Vũng Tàu', 
                        image: require('../../images/chinhanh/br1.jpg'),
                    },
                ]
            },
            {
                district_id: 1, 
                country_id: 4, 
                name: 'TP. Vũng Tàu', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 4,
                        name: 'VT Ba Cu', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '5 Ba Cu, Phường 1, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu', 
                        image: require('../../images/chinhanh/vt1.jpg'),
                    }, 
                ]
            },
            {
                district_id: 2, 
                country_id: 4, 
                name: 'TP. Bà Rịa', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 2, 
                        country_id: 4,
                        name: 'BR Nguyễn Hữu Thọ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '76 Nguyễn Hữu Thọ, Phước Trung, Bà Rịa, Bà Rịa - Vũng Tàu', 
                        image: require('../../images/chinhanh/br1.jpg'),
                    }, 
                ]
            },
          ]
    },
    {
        country_id: 5, 
        name: 'Đồng Nai', 
        district: [
            {
                district_id: 2, 
                country_id: 5, 
                name: 'Quận/Huyện', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 5,
                        name: 'BH Võ Thị Sáu', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '284 Võ Thị Sáu, Thống Nhất, Thành phố Biên Hòa, Đồng Nai', 
                        image: require('../../images/chinhanh/bh1.jpg'),
                    }, 
                ]
            },
            {
                district_id: 1, 
                country_id: 5, 
                name: 'Tp. Biên Hòa', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 5,
                        name: 'BH Võ Thị Sáu', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '284 Võ Thị Sáu, Thống Nhất, Thành phố Biên Hòa, Đồng Nai', 
                        image: require('../../images/chinhanh/bh1.jpg'),
                    }, 
                ]
            },
          ]
    },
    {
        country_id: 6, 
        name: 'Bình Dương', 
        district: [
            {
                district_id: 2, 
                country_id: 6, 
                name: 'Quận/Huyện', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 6,
                        name: 'Hikari Bình Dương    ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'Lô A11 - A12 - A16 đường Lý Thái Tổ, TP. Thủ Dầu Một, Bình Dương', 
                        image: require('../../images/chinhanh/bd.jpg'),
                    }, 
                ]
            },
            {
                district_id: 1, 
                country_id: 6, 
                name: 'Tp. Thủ Dầu Một', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 6,
                        name: 'Hikari Bình Dương    ', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: 'Lô A11 - A12 - A16 đường Lý Thái Tổ, TP. Thủ Dầu Một, Bình Dương', 
                        image: require('../../images/chinhanh/bd.jpg'),
                    }, 
                ]
            },
          ]
    },
    {
        country_id: 7, 
        name: 'Tiền Giang', 
        district: [
            {
                district_id: 2, 
                country_id: 7, 
                name: 'Quận/Huyện', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 7,
                        name: 'TG Vincom Plaza Mỹ Tho', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '1A Hùng Vương, Phường 1, Thành phố Mỹ Tho, Tiền Giang', 
                        image: require('../../images/chinhanh/bd.jpg'),
                    }, 
                ]
            },
            {
                district_id: 1, 
                country_id: 7, 
                name: 'Thành Phố Mỹ Tho', 
                street: [
                    {
                        street_id: 1, 
                        district_id: 1, 
                        country_id: 7,
                        name: 'TG Vincom Plaza Mỹ Tho', 
                        map: 'https://www.google.com/maps/place/The+Coffee+House+-+The+HUB+Building/@10.8007176,106.7065633,17z/data=!3m1!4b1!4m5!3m4!1s0x3175299fa1cddd51:0xaec7949c36d55803!8m2!3d10.8007176!4d106.7065633',
                        address: '1A Hùng Vương, Phường 1, Thành phố Mỹ Tho, Tiền Giang', 
                        image: require('../../images/chinhanh/bd.jpg'),
                    }, 
                ]
            },
          ]
    },
]

export default State