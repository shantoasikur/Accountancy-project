import React from 'react';
import pic from '../assets/pic1.png';
import pic5 from '../assets/pic5.jpg';
import Navber from '../components/Navber';
import Calendar from '../components/Calender';
import Footer from '../components/Footer';

const Services = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <Navber />
            <div className="relative">
                <img
                    src={pic5}
                    alt="Sample"
                    className="w-full object-fit h-[200px]"
                />
                <div className="absolute inset-0 flex items-center justify-start pl-6 text-white text-2xl font-bold" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    Services
                </div>
            </div>
            <div className='container mx-auto px-6 py-10 flex gap-10'>
                <div className="social-share ml-10">
                    <p className='mb-6'>
                        @ H & S Accountancy, we integrate and consolidate your accounting means, using technology wherever possible to leverage efficiency and cost savings, while complementing your business model, allowing you to focus on your business growth.
                    </p>
                    <p className='mb-6'>
                        Whether at your place or ours, or even a bit of both, our attentive and professional approach will manage the accounting processes that are vital to both legal compliance and managerial control.
                    </p>
                    <p className='mb-6'>
                        We are committed to providing a quality service and offer regular meetings to ensure that your accounting needs are being met and are helping to grow your business.
                    </p>

                    <div className="social-icons flex gap-6 items-center mt-10">
                        {[
                            { link: 'https://www.facebook.com/sharer/sharer.php?u=https://hnsaccountancy.com/about-us-2/', icon: 'fab fa-facebook text-blue-700', text: 'Share' },
                            { link: 'https://x.com/intent/post?text=About%20Us&url=https%3A%2F%2Fhnsaccountancy.com%2Fabout-us-2%2F&=', icon: 'fab fa-twitter text-blue-300', text: 'Tweet' },
                            { link: 'https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html', icon: 'fab fa-google-plus-g text-red-500', text: 'Share' },
                            { link: 'https://hnsaccountancy.com/about-us-2/', icon: 'fab fa-pinterest-p text-red-800', text: 'Share' },
                            { link: 'https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26title%3DAbout%2520Us%26url%3Dhttps%3A%2F%2Fhnsaccountancy.com%2Fabout-us-2%2F%26summary%3DH%2B%2526amp%253B%2BS%2BAccountancy%2Bis%2Ba%2Btrading%2Bname%2Bof%2BH%2B%2526amp%253B%2BS%2BExplore%2BLtd.%2Bthe%2Bcompany%2Bestablished%2Bin%2B2012%2Bwi...', icon: 'fab fa-linkedin-in text-blue-900', text: 'Share' },
                            { link: 'https://digg.com/', icon: 'fab fa-digg text-blue-900', text: 'Share' }
                        ].map((item, index) => (
                            <a key={index} href={item.link} target="_blank" className="social-button border-t-2 hover:border-0 bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm flex items-center gap-2">
                                <i className={item.icon}></i> {item.text}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar Section */}
                <div className="w-1/3">
                    {/* Image */}
                    <img src={pic} alt="Mission & Vision" className="w-full mb-5" />

                    <Calendar />

                    {/* Latest News */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b-2 pb-2">LATEST NEWS</h3>
                        <ul className="mt-2 text-gray-700 dark:text-gray-300">
                            {[
                                { title: 'Coronavirus (COVID-19): What To Do If You’re Self-Employed And Getting Less Work Or No Work', date: 'April 12, 2020' },
                                { title: 'New Rules For Taxation Of Termination Payments', date: 'April 9, 2018' },
                                { title: 'Income Tax When You Let Property', date: 'April 9, 2018' },
                                { title: 'Income Tax And National Insurance Contributions: Treatment Of Termination Payments', date: 'April 4, 2018' }
                            ].map((news, index) => (
                                <li key={index} className="mt-2">
                                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">{news.title}</a>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{news.date}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Client's View */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b-2 pb-2">WHAT IS OUR CLIENT’S VIEW:</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            <span className="text-green-600 font-bold">Excellent service</span> & eager to listen to clients' needs. "Value for money"
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Services;
