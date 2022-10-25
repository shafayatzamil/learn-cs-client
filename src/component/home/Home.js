import React from 'react';
 import cover from '../../images/cover.png'
 import  './Home.css';

const Home = () => {
    return (
        <div className='container m-auto  flex flex-row justify-center items-center '>
            <div className='basis-2/4 m-10'>
                <h2 className='text-6xl font-bold'>Your One-stop shop to  study in the us</h2>
                <p className='mt-4'>We're team of former international student.We all took the same journey as you,and know the problems and concerns your face</p>
                <button className="btn btn-warning mt-2">Get Start</button>
            </div>
            <div className='basis-2/4' >
                <img className='cover-image' src={cover} alt="" />
            </div>
        </div>
    );
};

export default Home;