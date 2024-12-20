
import Header from "../header";
import "./index.css"
import Footer from "../footer/footer.jsx";
import Map from "../map"
import ContactForm from "../formContact"
import { Link } from "react-router-dom";
import Number from "../animatedNum";
import HomeService from "../homeservice/index.jsx";
import Journey from "../journey/index.jsx";
import Social from "../social/index.jsx";


const Home = () => {


    return (

        <>
            <Header />

            <section className="sec-margin " id="first">
                <div className=" container top-ind flex-1">
                    <div className=" left pd-1" data-aos="fade-up">
                        <div className="upper-cont" >
                            <div className="head-about">
                                <h1 className="head">Empowering Talent, Enabling Growth</h1>
                            </div>
                            <div className="descrbe-about">
                                <h6 className="sub-head">Since 2020, we’ve been bridging the gap between businesses and
                                    exceptional talent across industries. From providing staffing solutions, executive
                                    search, and payroll outsourcing to delivering real-time IT project development, we
                                    specialize in serving both IT and non-IT sectors. Whether you need manpower for
                                    short-term or long-term needs, or you’re seeking full-time, freelance, or contract
                                    roles, we create opportunities for companies to thrive and professionals to grow. Let us
                                    unlock new possibilities and drive your success forward.
                                </h6>
                            </div>
                        </div>
                        <br />
                        <div className="gap-8 flex flex-row items-center ">
                            <div className="touch ">
                                <Link className="button-read" to="/contact">Get In Touch <i className="fa-solid fa-circle-arrow-right"></i></Link>

                            </div>
                            <div> <Social /></div>
                           
                        </div>
                    </div>

                    <div className=" right pd-1 hero-c">

                        <video autoplay="" muted loop playsinline width="100%" height="100%">
                            <source src="/video/w.mp4" type="video/mp4" />
                        </video>

                    </div>
                </div>
            </section>



            <section className="achieved-section" data-aos="fade-up">
                <div className=" achieved-heading align-item-center">
                    <h3>"Achievements That Define Us"
                    </h3>
                </div>
                <div className="out-success">
                    <div className="success" data-aos="fade-up">
                        <div className="circle">
                            <h2>
                                <Number n={5} />+</h2>
                        </div>
                        <div className="success-head">
                            <h4>Year Of Excellence in Staffing & Solutions </h4>
                        </div>

                    </div>
                    <div className="success" data-aos="fade-up">
                        <div className="circle">
                            <h2><Number n={125} />+</h2>
                        </div>
                        <div className="success-head">
                            <h4>Clients Connected Across Various Industries</h4>
                        </div>

                    </div>
                    <div className="success" data-aos="fade-up">
                        <div className="circle">
                            <h2><Number n={1100} />+</h2>
                        </div>
                        <div className="success-head">
                            <h4>Goals Achieved by Talented Employees</h4>
                        </div>

                    </div>

                </div>


            </section>


            <HomeService />

            <Journey />

            <ContactForm />
            <Footer />

        </>


    )



}


export default Home;