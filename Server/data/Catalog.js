const Catalog = [
    {
        id: 1,
        name: 'Cà Phê', 
        path: 'coffee',
        children:[
            {
                name: "Cà Phê Việt Nam", 
                path: 'Cà-phê-việt-nam', 
                TypeCatalogParent: 1
            }, 
            {
                name: 'Cà Phê Máy', 
                path: 'Cà-phê-máy', 
                TypeCatalogParent: 1
            }, 
            {
                name: 'Cold Brew', 
                path: 'Cold-Brew', 
                TypeCatalogParent: 1
            }
        ]
    }, 
    {
        id:2,
        name: 'CloudFee', 
        path: 'cloudfee',
        children: [
            {
                name: "Creamy", 
                path: 'creamy', 
                TypeCatalogParent: 2
            }, 
            {
                name: 'Creme Brulee', 
                path: 'Creme-Brulee', 
                TypeCatalogParent: 2
            }, 
            {
                name: 'Đoàn viên', 
                path: 'Đoàn-Viên',
                TypeCatalogParent: 1
            },
        ]
    }, 
    {
        id: 3,
        name: 'Trà', 
        path: 'tea',
        children: [
            {
                name: "Trà trái cây", 
                path: 'Trà-trái-cây',
                TypeCatalogParent: 3
            }, 
            {
                name: 'Trà sữa Macchiato', 
                path: 'Trà-sữa-Machiato', 
                TypeCatalogParent: 3
            },
        ]
    }, 
    {
        id: 4,
        name: 'Hi-Tea Healthy', 
        path: 'hitea',
        children: [
            {
                name: "Hi-Tea Trà", 
                path: 'Hi-Tea-Trà', 
                TypeCatalogParent: 4
            }, 
            {
                name: 'Hi-Tea đá tuyết', 
                path: 'Hi-Tea-đá-tuyết', 
                TypeCatalogParent: 4
            }, 
            {
                name: 'Hi-Tea Bling Bling', 
                path: 'Hi-Tea-bling-bling', 
                TypeCatalogParent: 4
            }, 
        ]
    }, 
    {
        id: 5,
        name: "Bánh & Snack", 
        path: 'banh', 
        children: [
            {
                name: "Bánh mặn", 
                path: 'Bánh-Mặn', 
                TypeCatalogParent: 5,
            }, 
            {
                name: 'Bánh Ngọt', 
                path: 'Bánh-Ngọt', 
                TypeCatalogParent: 5
            }, 
            {
                name: 'Snack', 
                path: 'Snack', 
                TypeCatalogParent: 5
            },
        ]
    }, 
    {
        id: 6,
        name: "Tại nhà", 
        path: "Home",
        children: [
            {
                name: "Cà phê tại nhà", 
                path: 'Cà-Phê-Tại-Nhà', 
                TypeCatalogParent: 6
            }, 
            {
                name: "Trà Tại Nhà", 
                path: "Trà-Tại-Nhà", 
                TypeCatalogParent: 6
            }, 
        ]
    }, 
    {
        id: 7,
        name: "Thức uống khác", 
        path: 'difference',
        children: [
            {
                name: "Chocolate", 
                path: 'Chocolate', 
                TypeCatalogParent: 7
            }
        ]
    }
]

export default Catalog