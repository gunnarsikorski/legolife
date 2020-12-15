import React from 'react';

const Wishlist = () => {
    return (
        <div>
            {JSON.parse(localStorage.getItem('legos')).map((lego) => (
                <div>
                    <h2>{lego.name}</h2>
                </div>
            ))}

        </div>
    );
};

export default Wishlist;