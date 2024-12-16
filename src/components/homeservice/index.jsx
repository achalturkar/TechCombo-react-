

import {Link} from "react-router-dom";

const HomeService =() =>{

    return(


        <section className=" clr" id="services">
            <div className="container sec-margin">
                <div className="service align-item-center"  data-aos="fade-up">
                    <h2 className="section-head">Our Services</h2>
                    <p className="section-para"></p>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4"  data-aos="fade-up">
                        <div className="card h-100 service-card">
                            <div className="service-logo-outer">

                                <div className="service-logo">
                                    <i className="fa-solid fa-users"></i>

                                </div>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title align-item-center">Staffing & Selection</h5>
                                <p className="card-text">“We connect businesses with the right talent, ensuring they find
                                    skilled professionals for every role, from entry-level to senior positions.”

                                </p>
                                <Link className="button-read" to="/staffing">Read More</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col mb-4"  data-aos="fade-up">
                        <div className="card h-100 service-card">
                            <div className="service-logo-outer">

                                <div className="service-logo">
                                    <i className="fa-solid fa-user-tie"></i>

                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title align-item-center">Executive Search
                                </h5>
                                <p className="card-text">“Our executive search service identifies top leaders and key
                                    decision-makers to help organizations grow and thrive.”</p>
                                <Link className="button-read" to="/executive">Read More</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col mb-4"  data-aos="fade-up">
                        <div className="card h-100 service-card">
                            <div className="service-logo-outer">

                                <div className="service-logo">
                                    <i className="fa-solid fa-users-between-lines"></i>

                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title align-item-center">Payroll Outsourcing</h5>
                                <p className="card-text">“We manage payroll processes efficiently, reducing administrative
                                    burdens and ensuring timely and accurate payments for employees.”</p>
                                <Link className="button-read" to="/payroll">Read More</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col mb-4"  data-aos="fade-up">
                        <div className="card h-100 service-card">
                            <div className="service-logo-outer">
                                <div className="service-logo">
                                    <i className="fa-solid fa-users-gear"></i>

                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title align-item-center">Manpower Outsourcing</h5>
                                <p className="card-text">“Scale your operations effortlessly with our manpower outsourcing
                                    solutions, designed to meet your short-term and long-term workforce needs.”

                                </p>
                                <Link className="button-read" to="/manpower">Read More</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col mb-4"  data-aos="fade-up">
                        <div className="card h-100 service-card">
                            <div className="service-logo-outer">

                                <div className="service-logo">
                                    <i className="fa-solid fa-computer"></i>

                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title align-item-center">IT Project Development
                                </h5>
                                <p className="card-text">“We develop and deliver high-quality IT projects tailored to client
                                    needs, ensuring timely completion with the latest technologies.”

                                </p>

                                <Link className="button-read" to="/itDevelopment">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4"  data-aos="fade-up">
                        <div className="card h-100 service-card">
                            <div className="service-logo-outer">

                                <div className="service-logo">
                                    <i className="fa-solid fa-user-large"></i>

                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title align-item-center">Full-Time, Freelance & Contract Work
                                    Opportunities

                                </h5>
                                <p className="card-text">“Whether full-time, freelance, or contract-based roles, we offer
                                    diverse employment options that align with career goals and business needs.”

                                </p>

                                <Link className="button-read" to="/jobs">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    );

}

export default HomeService;