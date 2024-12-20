
import "./index.css";
import Header from "../header";
import Footer from "../footer/footer.jsx";
import Square from "../square"


const About = () => {



    return (
        <>

            <Header />


            <main>
                <section className="hero-video">
                    <div className="video-container">
                        <video autoplay="" muted loop playsinline width="100%">
                            <source src="/video/Connecting Opportunities.mp4" type="video/mp4" />
                        </video>

                    </div>
                </section>




                <section className="sec-about">
                    <div className="container about-sec">
                        <div className=" about-head align-item-center" data-aos="fade-up">

                            <h3>About Us</h3>
                        </div>



                        <div className="about-detail">
                            <div className="left" data-aos="fade-up">

                                <img src="/images/abt.jpg" alt="" />

                            </div>

                            <div className="right" data-aos="fade-up">

                                <p>
                                    At TechCombo, we are a dynamic provider of staffing and project solutions, dedicated to
                                    empowering businesses and professionals to achieve their full potential. Founded with a
                                    focus on
                                    IT staffing, we have grown over the years to expand into non-IT sectors, payroll
                                    outsourcing,
                                    and real-time IT project development. Our expertise lies in matching the right talent with
                                    business needs, driving success through innovative staffing models and agile project
                                    delivery.
                                </p>

                                <p>
                                    We are more than just a staffing agency; we act as a strategic partner for organizations.
                                    Whether it’s manpower outsourcing, contract hiring, or payroll management, we offer
                                    customized
                                    solutions that align with your unique business requirements. Be it project-based teams or
                                    long-term employees, we ensure the right fit to help your business thrive.
                                </p>


                                <p>
                                    Our goal is to allow businesses to focus on their core operations, while we take care of
                                    sourcing, hiring, and managing talent. We ensure smooth project execution, operational
                                    efficiency, and seamless workforce management. For professionals, TechCombo offers exciting
                                    opportunities across industries—whether through freelance, contract, or full-time roles,
                                    enabling career growth and diverse work experiences.
                                </p>

                                <p>
                                    Through our real-time project development services, we deliver tailored solutions that meet
                                    the
                                    fast-evolving demands of today’s business landscape. From IT infrastructure to custom
                                    software
                                    solutions, we provide on-demand expertise, partnering with organizations to drive innovation
                                    and
                                    deliver value in every project.
                                </p>

                                <p>
                                    At the core of TechCombo's mission is a people-first approach—building relationships beyond
                                    transactions and creating partnerships that generate lasting impact. Guided by growth,
                                    integrity, and excellence, we strive to bridge the gap between talent and opportunities,
                                    empowering both individuals and businesses to succeed and reach new heights.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                    <section className="container sec-margin" id="choose">
                        <div className="service align-item-center" data-aos="fade-up">
                            <h2 className="section-head">Why Choose Us?</h2>
                            <p className="section-para"></p>
                        </div>

                        <div className="row row-cols-1 row-cols-md-3">
                            <Square head="Wide Network" para="Access to a pool of talent across 200+ technologies
                                            ensures that we meet
                                            business needs swiftly and efficiently."
                                icon="fa-solid fa-network-wired" />
                            <Square head="Proven Experience" para=" With over 5+ years in the industry, we’ve partnered
                                            with 125+
                                            clients, supporting 1100+ employees in their career journeys.."
                                icon="fa-solid fa-building" />
                            <Square head="Tailored Approach" para="We understand that every company is unique. Our
                                            recruitment process
                                            is designed to deliver customized solutions that align with your business goals."
                                icon="fa-solid fa-star" />
                            <Square head="Real-Time IT Project Development" para="TechCombo specializes in real-time project delivery. From
                                            software development to system integration and IT infrastructure management, we
                                            provide agile solutions designed to meet evolving business demands."
                                icon="fa-solid fa-computer" />
                            <Square head="Scalable Staffing Models" para="We understand that businesses need flexibility. Whether you require
                                            temporary staff, contract workers, or a permanent team, our solutions are designed
                                            to scale with your needs, minimizing overheads and ensuring operational efficiency."
                                icon="fa-solid fa-users-line" />
                            <Square head="Focus on Quality and Compliance" para="Our strict screening processes and focus on regulatory compliance
                                            guarantee that you receive qualified talent with minimal risks. From payroll
                                            compliance to legal documentation, we ensure that your workforce management is
                                            seamless and hassle-free."
                                icon="fa-solid fa-hand-holding-heart" />
                            <Square head="Empowering Professionals" para="We offer exciting career opportunities across industries.
                                            Professionals can choose from freelance, contract, or full-time roles, enabling them
                                            to explore diverse projects and grow their expertise in their chosen fields."
                                icon="fa-solid fa-people-group" />
                            <Square head="People-First Approach" para="At TechCombo, we believe in building long-term relationships. Our
                                            approach is centered on understanding the unique needs of every client and employee,
                                            creating partnerships that drive mutual success and growth."
                                icon="fa-solid fa-people-roof" />
                            <Square head="Trusted by Top Companies" para="Our clients trust us because of our dedicated support, efficient
                                            staffing processes, and customized solutions. We help businesses stay focused on
                                            their core operations, while we manage their workforce and deliver projects
                                            seamlessly."
                                icon="fa-solid fa-medal" />

                        </div>
                </section>


                <button className="mode-button" id="mode"><i className="fa-solid fa-toggle-on"></i></button>

                <a href="#" className="back-to-top" id="backToTop">
                    <i className="fa-solid fa-plane-up"></i>
                </a>


            </main>



            <Footer />




        </>

    );


}

export default About;