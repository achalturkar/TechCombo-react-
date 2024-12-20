// import "./footer.css";
import { Link } from "react-router-dom";
import Social from "../social/index.jsx";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaAngleDoubleRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";






const Footer = () => {

    return (

        //     <footer className="footer">
        //     <div className=" footer-box">
        //         <div className="logo-contact">
        //             <div className="foot-logo">
        //                 <img src="/images/logo.png" alt="Techcombo Logo" width="100px"/>
        //             </div>
        //             <div className="contact-foot"  data-aos="fade-up">
        //                 <p>Phone: +91 9999999999</p>
        //                 <p>Email: <Link to="mailto:hr@techcombo.in" target="_blank">hr@techcombo.in</Link></p>
        //                 <p>Address: Dronacharya Nagar,<br/>Trimurti Nagar, Nagpur 440022</p>
        //             </div>
        //         </div>

        //         <div className="nav-foot">
        //             <h3>Quick Links</h3>
        //             <ul className="nav-ul-list-footer"  data-aos="fade-up">
        //                 <li><Link to="/"><i className="fa-solid fa-angles-right"></i> Home</Link></li>
        //                 <li><Link to="/about"><i className="fa-solid fa-angles-right"></i> About</Link></li>
        //                 <li><Link to="/jobs"><i className="fa-solid fa-angles-right"></i> Careers & Jobs</Link></li>
        //                 <li><Link to="/contact"><i className="fa-solid fa-angles-right"></i> Contact Us</Link></li>
        //             </ul>
        //         </div>

        //         <div className="service-job">
        //             <div className="service">
        //                 <h3>Services</h3>
        //                 <ul data-aos="fade-up">
        //                     <li><Link to="/staffing"><i className="fa-solid fa-angles-right"></i> Staffing Solution</Link></li>
        //                     <li><Link to="/manpower"><i className="fa-solid fa-angles-right"></i> Manpower Outsourcing</Link></li>
        //                     <li><Link to="/payroll"><i className="fa-solid fa-angles-right"></i> Payroll Outsourcing</Link></li>
        //                     <li><Link to="/executive"><i className="fa-solid fa-angles-right"></i> Executive Search</Link></li>
        //                     <li><Link to="/itDevelopment"><i className="fa-solid fa-angles-right"></i> Real Time IT Project Development</Link></li>
        //                 </ul>
        //             </div>
        //         </div>

        //         <div className="follow-site">
        //             <h3>Follow Us</h3>
        //             <div className="social-icon ">
        //                 <Link to="#" target="_blank"><i className="fab fa-facebook-f"></i></Link>
        //                 <Link to="#" target="_blank"><i className="fab fa-twitter"></i></Link>
        //                 <Link to="https://www.linkedin.com/groups/10462070/?highlightedUpdateUrn=urn%3Ali%3AgroupPost%3A10462070-7247050478386089984&q=highlightedFeedForGroups"
        //                     target="_blank"><i className="fab fa-linkedin-in"></i></Link>
        //                 <Link to="#" target="_blank"><i className="fab fa-instagram"></i></Link>
        //             </div>
        //         </div>
        //     </div>

        //     <hr/>

        //     <div className="copy-right">
        //         <p>&copy; 2024 Techcombo | All rights reserved.</p>
        //     </div>
        // </footer>

        <footer className="bg-white text-black pt-8 border-t">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="/logo.png"
                        alt="TechCombo Logo"
                        className="w-32 h-auto mb-2"
                    />
                   <Social />
                </div>


                <div>
                    <h3 className="text-lg font-semibold mb-2">Services</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><FaAngleDoubleRight />
                            <Link to="/staffing" className="list-none text-black hover:text-red-600 hover:no-underline"> Staffing Solution</Link></li>
                        <li className="flex items-center"><FaAngleDoubleRight />
                            <Link to="/payroll" className="list-none text-black hover:text-red-600 hover:no-underline"> Payroll Outsourcing</Link></li>
                        <li className="flex items-center"><FaAngleDoubleRight />
                            <Link to="/manpower" className="list-none text-black hover:text-red-600 hover:no-underline"> Manpower Outsourcing</Link></li>
                        <li className="flex items-center"><FaAngleDoubleRight />
                            <Link to="/executive" className="list-none text-black hover:text-red-600 hover:no-underline"> Executive Search</Link></li>
                        <li className="flex items-center"><FaAngleDoubleRight />
                            <Link to="/itDevelopment" className="list-none text-black hover:text-red-600 hover:no-underline"> IT Project Development</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2 ">
                        <li><Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">Home</Link></li>
                        <li><Link to="/about" className="text-black hover:text-red-600  hover:no-underline">About Us</Link></li>
                        <li><Link to="/jobs" className="text-black hover:text-red-600  hover:no-underline">Jobs</Link></li>
                        <li><Link to="/contact" className="text-black hover:text-red-600  hover:no-underline">Contact</Link></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">Blog</Link></li>
                        <li><Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">Work</Link></li>
                        <li><Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">Privacy Policy</Link></li>
                        <li><Link to="/" className="list-none text-black hover:text-red-600 hover:no-underline">Terms of use</Link></li>
                    </ul>
                </div>


            </div>

            <div className="bg-current	">
                <p className="text-white text-center ">&copy; 2024 TechCombo. All rights reserved.</p>
            </div>
        </footer>




    );


}

export default Footer;