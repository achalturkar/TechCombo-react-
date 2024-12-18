
import "./index.css"
import {Link} from "react-router-dom";
import Square from "../square"
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";


const HomeService =() =>{

    return(

            <section className="container sec-margin" id="services">
                <div className="service align-item-center"  data-aos="fade-up">
                    <h2 className="section-head">Our Services</h2>
                    <p className="section-para"></p>
                </div>

                <div className="row row-cols-1 row-cols-md-3">

                <Square head="Staffing & Selection" para="“We connect businesses with the right talent, ensuring they find
                                    skilled professionals for every role, from entry-level to senior positions.”" 
                                    link="/staffing" icon="fa-solid fa-users"/>

                <Square head="Executive Search" para="“Our executive search service identifies top leaders and key
                                    decision-makers to help organizations grow and thrive.”" 
                                    link="/executive" icon="fa-solid fa-user-tie"/>

                <Square head="Payroll Outsourcing" para="“We manage payroll processes efficiently, reducing administrative
                                    burdens and ensuring timely and accurate payments for employees.”" 
                                    link="/payroll" icon="fa-solid fa-users-between-lines"/>

                <Square head="Manpower Outsourcing" para="“Scale your operations effortlessly with our manpower outsourcing
                                    solutions, designed to meet your short-term and long-term workforce needs.”" 
                                    link="/manpower" icon="fa-solid fa-users-gear"/>

                <Square head="IT Project Development" para="“We develop and deliver high-quality IT projects tailored to client
                                    needs, ensuring timely completion with the latest technologies.”" 
                                    link="/itDevelopment" icon="fa-solid fa-computer"/>

                <Square head="Full-Time, Freelance & Contract Work
                                    Opportunities" para="“Whether full-time, freelance, or contract-based roles, we offer
                                    diverse employment options that align with career goals and business needs.”"
                                     link="/jobs" icon="fa-solid fa-user-large"/>

                </div>
            </section>

    );

}

export default HomeService;