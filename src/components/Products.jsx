import React from 'react';
import Product from './Product';

const items = [
    { id: 1, name: 'Classic Tee', price: '₹2,075', img: 'https://inprintwetrust.co/cdn/shop/products/studio-54-classic-tee-in-print-we-trust-992250.jpg?v=1720001933&width=2048' },
    { id: 2, name: 'Denim Jacket', price: '₹4,980', img: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/18936425a.webp' },
    { id: 3, name: 'Sneakers', price: '₹6,640', img: 'https://cdna.lystit.com/400/500/tr/photos/dressinn/4636ff93/hugo-White-Blake-Trainers.jpeg' },
    { id: 4, name: 'Beanie Hat', price: '₹1,245', img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/025636/01/fnd/IND/fmt/png/Cuffless-Beanie' },
    { id: 5, name: 'Leather Wallet', price: '₹3,735', img: 'https://www.jiomart.com/images/product/500x630/rviwyrjeld/moochief-men-brown-leather-wallet-product-images-rviwyrjeld-0-202206142206.jpg' },
    { id: 6, name: 'Sunglasses', price: '₹2,490', img: 'https://rukminim2.flixcart.com/image/832/832/k1i6ikw0/sunglass/e/m/h/l-m242gr4t-fastrack-original-imafh268xhfd4zna.jpeg?q=70&crop=false' },
    { id: 7, name: 'Backpack', price: '₹5,810', img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/079392/03/fnd/IND/fmt/png/School-Backpack' },
    { id: 8, name: 'Wristwatch', price: '₹9,960', img: 'https://tse4.mm.bing.net/th/id/OIP.Cm16Ha-x5CcR2zAKezy4jAHaHa?w=533&h=533&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 9, name: 'Laptop Bag', price: '₹3,320', img: 'https://i5.walmartimages.com/seo/Men-Soft-Laptop-Tote-Bag-Shoulder-Bag-For-11-12-13-14-15-15-6-Laptop-Fashion-Solid-Color-Dark-grey_e272421e-203b-428e-ad52-b09a805c6778.0575aa97d00070365483e3e8c682ccce.jpeg?odnHeight=372&odnWidth=372&odnBg=FFFFFF' },
    { id: 10, name: 'Sports Shoes', price: '₹6,640', img: 'https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/productimage/2020/10/16/f7287893-370b-4f73-87a1-54743e33f4321602800643880-1.jpg' },
    { id: 11, name: 'Wireless Headphones', price: '₹4,150', img: 'https://5.imimg.com/data5/GD/XX/MY-10981130/s460-wireless-headphone-28on-ear-29-6-months-warranty-free-shipping-1000x1000.jpg' },
    { id: 12, name: 'Bags', price: '₹450', img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/092098/02/fnd/IND/fmt/png/PUMA-PLUSH-Women\'s-Trendy-Tote-Handbag-23L' }
];

export default function Products() {
    return (
        <div className="grid">
            {items.map(p => <Product key={p.id} {...p} />)}
        </div>
    );
}
