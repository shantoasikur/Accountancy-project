import React from 'react';
import Navber from '../components/Navber';
import pic7 from '../assets/pic7.jpg';
import pic from '../assets/pic1.png';
import Calendar from '../components/Calender';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contactus = () => {
    return (
        <div>
            <Navber />
            <div className="relative">
                <img
                    src={pic7}
                    alt="Sample"
                    className="w-full object-cover h-[200px]"
                />
                <div className="absolute inset-0 flex items-center justify-start pl-6 text-white text-2xl font-bold">
                    ContactUS
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row gap-10">
                <div className="md:w-2/3 w-full">
                    <div className="social-share">
                        <div className="social-icons flex flex-wrap gap-4 items-center mt-6 mb-6">
                            <a
                                href="https://www.facebook.com/sharer/sharer.php?u=https://hnsaccountancy.com/about-us-2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-blue-700 hover:bg-blue-700 hover:text-white transition-all p-2 rounded-md"
                            >
                                <i className="fab fa-facebook text-blue-700"></i> Share
                            </a>

                            <a
                                href="https://x.com/intent/post?text=About%20Us&url=https%3A%2F%2Fhnsaccountancy.com%2Fabout-us-2%2F&="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-blue-300 hover:bg-blue-300 hover:text-white transition-all p-2 rounded-md"
                            >
                                <i className="fab fa-twitter text-blue-300"></i> Tweet
                            </a>

                            <a
                                href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-red-500 hover:bg-red-500 hover:text-white transition-all p-2 rounded-md"
                            >
                                <i className="fab fa-google-plus-g text-red-500"></i> Share
                            </a>

                            <a
                                href="https://hnsaccountancy.com/about-us-2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-red-800 hover:bg-red-800 hover:text-white transition-all p-2 rounded-md"
                            >
                                <i className="fab fa-pinterest-p text-red-800"></i> Share
                            </a>

                            <a
                                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26title%3DAbout%2520Us%26url%3Dhttps%3A%2F%2Fhnsaccountancy.com%2Fabout-us-2%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-blue-900 hover:bg-blue-900 hover:text-white transition-all p-2 rounded-md"
                            >
                                <i className="fab fa-linkedin-in text-blue-900"></i> Share
                            </a>

                            <a
                                href="https://digg.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-blue-900 hover:bg-blue-900 hover:text-white transition-all p-2 rounded-md"
                            >
                                <i className="fab fa-digg text-blue-900"></i> Share
                            </a>
                        </div>
                        <ContactForm />
                    </div>
                </div>
                {/* Right Sidebar Section */}
                <div className="md:w-1/3 w-full">
                    <img src={pic} alt="Mission & Vision" className="w-full mb-5" />
                    <Calendar />
                    {/* Latest News */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 border-b-2 pb-2">
                            LATEST NEWS
                        </h3>
                        <ul className="mt-2 text-gray-700">
                            <li className="mt-2">
                                <a href="#" className="text-blue-600 hover:underline">
                                    Coronavirus (COVID-19): What To Do If You’re Self-Employed
                                </a>
                                <p className="text-gray-500 text-sm">April 12, 2020</p>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-blue-600 hover:underline">
                                    New Rules For Taxation Of Termination Payments
                                </a>
                                <p className="text-gray-500 text-sm">April 9, 2018</p>
                            </li>
                        </ul>
                    </div>
                    {/* Client's View */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 border-b-2 pb-2">
                            WHAT IS OUR CLIENT’S VIEW:
                        </h3>
                        <p className="text-gray-700 mt-2">
                            <span className="text-green-600 font-bold">Excellent service</span>
                            & eager to listen to clients' needs. "Value for money"
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Contactus;