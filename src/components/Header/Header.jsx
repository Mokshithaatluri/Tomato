import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div 
            className='header' 
            style={{ 
                backgroundImage: `url(/header_img.png)`, 
                backgroundRepeat: 'no-repeat' 
            }}
        >
            <div className="header-contents">
                <h2>Order your favorite food</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience.</p>
                <button>View Menu</button>
            </div>
        </div>
    );
};

export default Header;