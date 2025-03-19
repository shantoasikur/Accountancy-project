import React from 'react';
import Navber from '../components/Navber';
import pic7 from '../assets/pic7.jpg';
import pic from '../assets/pic1.png';
import Calendar from '../components/Calender';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contactus = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Navber />
            <div className="relative">
                <img
                    src={pic7}
                    alt="Sample"
                    className="w-full object-cover h-[200px]"
                />
                <div className="absolute inset-0 flex items-center justify-start pl-6 text-white text-2xl font-bold">
                    Contact Us
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row gap-10">
                <div className="md:w-2/3 w-full">
                    <div className="social-share">
                        <div className="social-icons flex flex-wrap gap-4 items-center mt-6 mb-6">
                            {[
                                { link: "https://www.facebook.com/sharer/sharer.php?u=https://hnsaccountancy.com/about-us-2/", icon: "fab fa-facebook text-blue-700" },
                                { link: "https://x.com/intent/post?text=About%20Us&url=https%3A%2F%2Fhnsaccountancy.com%2Fabout-us-2%2F&=", icon: "fab fa-twitter text-blue-300" },
                                { link: "https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html", icon: "fab fa-google-plus-g text-red-500" },
                                { link: "https://hnsaccountancy.com/about-us-2/", icon: "fab fa-pinterest-p text-red-800" },
                                { link: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fhnsaccountancy.com%2Fabout-us-2%2F", icon: "fab fa-linkedin-in text-blue-900" },
                                { link: "https://digg.com/", icon: "fab fa-digg text-blue-900" }
                            ].map((item, index) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" 
                                   className="flex items-center gap-2 border border-gray-700 dark:border-gray-300 hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-black transition-all p-2 rounded-md">
                                    <i className={item.icon}></i> Share
                                </a>
                            ))}
                        </div>
                        <ContactForm />
                    </div>
                </div>
                <div className="md:w-1/3 w-full">
                    <img src={pic} alt="Mission & Vision" className="w-full mb-5 rounded-lg" />
                    <Calendar />
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold border-b-2 pb-2 border-gray-500 dark:border-gray-700">
                            LATEST NEWS
                        </h3>
                        <ul className="mt-2">
                            <li className="mt-2">
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    Coronavirus (COVID-19): What To Do If You’re Self-Employed
                                </a>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">April 12, 2020</p>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    New Rules For Taxation Of Termination Payments
                                </a>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">April 9, 2018</p>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold border-b-2 pb-2 border-gray-500 dark:border-gray-700">
                            WHAT IS OUR CLIENT’S VIEW:
                        </h3>
                        <p className="mt-2">
                            <span className="text-green-600 dark:text-green-400 font-bold">Excellent service</span>
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