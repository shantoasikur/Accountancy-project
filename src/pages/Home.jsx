import React from 'react';
import Navber from '../components/Navber';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import ProfessionalServices from '../components/ProfessionalServices';
import pic6 from '../assets/pic6.jpg'

const Home = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-gray-200'>
            <Navber></Navber>
            <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
                <img
                    src={pic6}
                    alt="Sample"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-start p-4 md:p-6 text-white text-lg md:text-xl lg:text-2xl font-bold">
                    Home
                </div>
            </div>

            <AboutSection></AboutSection>
            <ProfessionalServices></ProfessionalServices>
            <Footer></Footer>

        </div>
    );
};

export default Home;