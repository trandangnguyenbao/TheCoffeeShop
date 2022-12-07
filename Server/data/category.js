const category = [
    {
        name: 'Tất cả',
        catalogSlug: 'all'
    }, 
    {
        name: "Cà Phê",
        catalogSlug: 'coffee', 
        children: [
            {  
                name: "Cà Phê Việt Nam",
                catalogSlugParent : "coffee", 
                catalogSlug: 'ca-phe-viet-nam'
            }, 
            {
                name: 'Cà Phê Máy', 
                catalogSlugParent : "coffee", 
                catalogSlug: 'ca-phe-may'
            }, 
            {
                name: 'Cold Brew', 
                catalogSlugParent : "coffee", 
                catalogSlug: 'cold-brew'
            }
        ]
    }, 
    {
        name: 'CloudFee', 
        catalogSlug: 'cloudfee', 
        children: [
            {  
                name: "Creamy", 
                catalogSlugParent : "cloudfee", 
                catalogSlug: 'creamy'
                
            }, 
            {
                name: 'Creme Brulee', 
                catalogSlugParent : "cloudfee", 
                catalogSlug: 'creme-brulee'
            },
            {
                name: 'Đoàn viên', 
                catalogSlugParent : "cloudfee", 
                catalogSlug: 'đoàn-viên'
            }
        ]
    }, 
    {
        name: 'Trà', 
        catalogSlug: 'tea', 
        children: [
            {  
                name: "Trà trái cây", 
                catalogSlugParent: 'tea', 
                catalogSlug: 'tra-trai-cay'
                
            }, 
            {
                name: 'Trà sữa Macchiato', 
                catalogSlugParent: 'tea', 
                catalogSlug: 'tra-sua-macchiato'
            }
        ]
    }, 
    {
        name: 'Hi-Tea Healthy', 
        catalogSlug: 'hitea', 
        children: [
            {  
                name: "Hi-Tea Trà", 
                catalogSlugParent: 'hitea', 
                catalogSlug: '/collections/hitea/hi-tea-tra'
                
            }, 
            {
                name: 'Hi-Tea đá tuyết', 
                catalogSlugParent: 'hitea', 
                catalogSlug: '/collections/hitea/hi-tea-da-tuyet'
            }, 
            {
                name: 'Hi-Tea Bling Bling', 
                catalogSlugParent: 'hitea', 
                catalogSlug: '/collections/hitea/hi-tea-bling-bling'
            }
        ]
    }, 
    {
        name: "Bánh & Snack", 
        catalogSlug: 'banh', 
        children: [
            {  
                name: "Bánh mặn", 
                catalogSlugParent: 'banh',
                catalogSlug: 'banh-man'
                
            }, 
            {
                name: 'Bánh Ngọt', 
                catalogSlugParent: 'banh',
                catalogSlug: 'banh-ngot'
            }, 
            {
                name: 'Snack', 
                catalogSlugParent: 'banh',
                catalogSlug: 'snack'
            }
        ]
    }, 
    {
        name: "Tại nhà", 
        catalogSlug: "tainha", 
        children: [
            {  
                name: "Cà phê tại nhà", 
                catalogSlugParent: "tainha", 
                catalogSlug: 'ca-phe-tai-nha'
                
            }, 
            {
                name: 'Trà tại nhà', 
                catalogSlugParent: "tainha", 
                catalogSlug: 'tra-tai-nha'
            }
        ]
    }, 
    {
        name: "Thức uống khác", 
        catalogSlug: 'difference', 
        children: [
            {
                name: 'Chocolate', 
                catalogSlugParent: 'difference',
                catalogSlug: 'chocolate'
            }
        ]
    }
]

export default category

