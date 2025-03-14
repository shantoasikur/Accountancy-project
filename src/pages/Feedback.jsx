import React from 'react';
import Navber from '../components/Navber';
import pic7 from '../assets/pic7.jpg';
import pic from '../assets/pic1.png';
import Calendar from '../components/Calender';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Feedbackpage from '../components/Feedbackpage';

const Feedback = () => {
    return (
        <div>
        <Navber />
        <div className="relative">
            <img src={pic7} alt="Sample" className="w-full object-cover h-[200px]" />
            <div className="absolute inset-0 flex items-center justify-start pl-6 text-white text-2xl font-bold">
                Feedback
            </div>
        </div>
        <div className='container mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10'>
            <div className="social-share mx-auto md:col-span-8">
                <div className="social-icons flex flex-wrap gap-4 sm:gap-6 items-center mt-6 sm:mt-10 mb-6 sm:mb-10">
                    <a href='https://www.facebook.com/sharer/sharer.php?u=https://hnsaccountancy.com/about-us-2/' target="_blank" className="social-button border-t-blue-700 border-t-2 hover:border-0 bg-gray-100 p-2 rounded flex items-center">
                        <i className="fab fa-facebook text-blue-700 mr-2"></i> Share
                    </a>
                    <a href="https://x.com/intent/post?text=About%20Us&url=https%3A%2F%2Fhnsaccountancy.com%2Fabout-us-2%2F&=" target="_blank" className="social-button border-t-blue-300 border-t-2 hover:border-0 bg-gray-100 p-2 rounded flex items-center">
                        <i className="fab fa-twitter text-blue-300 mr-2"></i> Tweet
                    </a>
                    <a href="https://hnsaccountancy.com/about-us-2/" target="_blank" className="social-button border-t-red-800 border-t-2 hover:border-0 bg-gray-100 p-2 rounded flex items-center">
                        <i className="fab fa-pinterest-p text-red-800 mr-2"></i> Share
                    </a>
                    <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26title%3DAbout%2520Us%26url%3Dhttps%3A%2F%2Fhnsaccountancy.com%2Fabout-us-2%2F%26summary%3DH%2B%2526amp%253B%2BS%2BAccountancy%2Bis%2Ba%2Btrading%2Bname%2Bof%2BH%2B%2526amp%253B%2BS%2BExplore%2BLtd.%2Bthe%2Bcompany%2Bestablished%2Bin%2B2012%2Bwi..." target="_blank" className="social-button border-t-blue-900 border-t-2 hover:border-0 bg-gray-100 p-2 rounded flex items-center">
                        <i className="fab fa-linkedin-in text-blue-900 mr-2"></i> Share
                    </a>
                </div>
                <Feedbackpage />
            </div>
            <div className="md:col-span-4">
                <img src={pic} alt="Mission & Vision" className="w-full mb-5" />
                <Calendar />
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b-2 pb-2">LATEST NEWS</h3>
                    <ul className="mt-2 text-gray-700">
                        <li className="mt-2">
                            <a href="#" className="text-blue-600 hover:underline">Coronavirus (COVID-19): What To Do If You’re Self-Employed And Getting Less Work Or No Work</a>
                            <p className="text-gray-500 text-sm">April 12, 2020</p>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="text-blue-600 hover:underline">New Rules For Taxation Of Termination Payments</a>
                            <p className="text-gray-500 text-sm">April 9, 2018</p>
                        </li>
                        <li className="mt-2">
                            <a href="#" className="text-blue-600 hover:underline">Income Tax When You Let Property</a>
                            <p className="text-gray-500 text-sm">April 9, 2018</p>
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 border-b-2 pb-2">WHAT IS OUR CLIENT’S VIEW:</h3>
                    <p className="text-gray-700 mt-2">
                        <span className="text-green-600 font-bold">Excellent service</span> & eager to listen to clients' needs. "Value for money"
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default Feedback;