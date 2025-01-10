import React from 'react';
import './Login.css';
import background from '../Assets/Background_Image';

const Login = () => {
    return (
        <div className='OuterLayer'>
            <div className='InnerLayer'>
                <div className='Background_Image'> 
                    <img src={background} alt="Background Image" />
                </div>

            </div>
        </div>
    );
};

export default Login;