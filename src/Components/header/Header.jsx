// import React from 'react';

import Profile from '../../assets/profile.png'

const Header = () => {

    

    return (
        <div >
            <div className='flex justify-between mb-5'>
                <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
                <img src={Profile} alt="" />
            </div>
            <hr />
            

            
        </div>
    );
};

export default Header;