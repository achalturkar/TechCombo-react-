import "./footer.css";
import {Link} from "react-router-dom";




const Footer= () =>{

   return(

    <footer className="footer">
    <div className=" footer-box">
        <div className="logo-contact">
            <div className="foot-logo">
                <img src="/images/logo.png" alt="Techcombo Logo" width="100px"/>
            </div>
            <div className="contact-foot">
                <p>Phone: +91 9999999999</p>
                <p>Email: <Link to="mailto:hr@techcombo.in" target="_blank">hr@techcombo.in</Link></p>
                <p>Address: Dronachrya Nagar,<br/>Trimurti Nagar, Nagpur 440022</p>
            </div>
        </div>

        <div className="nav-foot">
            <h3>Quick Links</h3>
            <ul className="nav-ul-list-footer">
                <li><Link to="/"><i className="fa-solid fa-angles-right"></i> Home</Link></li>
                <li><Link to="/about"><i className="fa-solid fa-angles-right"></i> About</Link></li>
                <li><Link to="/jobs"><i className="fa-solid fa-angles-right"></i> Careers & Jobs</Link></li>
                <li><Link to="/contact"><i className="fa-solid fa-angles-right"></i> Contact Us</Link></li>
            </ul>
        </div>

        <div className="service-job">
            <div className="service">
                <h3>Services</h3>
                <ul>
                    <li><Link to="/staffing"><i className="fa-solid fa-angles-right"></i> Staffing Solution</Link></li>
                    <li><Link to="/manpower"><i className="fa-solid fa-angles-right"></i> Manpower Outsourcing</Link></li>
                    <li><Link to="/payroll"><i className="fa-solid fa-angles-right"></i> Payroll Outsourcing</Link></li>
                    <li><Link to="/executive"><i className="fa-solid fa-angles-right"></i> Executive Search</Link></li>
                    <li><Link to="/itDevelopment"><i className="fa-solid fa-angles-right"></i> Real Time IT Project Development</Link></li>
                </ul>
            </div>
        </div>

        <div className="follow-site">
            <h3>Follow Us</h3>
            <div className="social-icon">
                <Link to="#" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#" target="_blank"><i className="fab fa-twitter"></i></Link>
                <Link to="https://www.linkedin.com/groups/10462070/?highlightedUpdateUrn=urn%3Ali%3AgroupPost%3A10462070-7247050478386089984&q=highlightedFeedForGroups"
                    target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                <Link to="#" target="_blank"><i className="fab fa-instagram"></i></Link>
            </div>
        </div>
    </div>

    <hr/>

    <div className="copy-right">
        <p>&copy; 2024 Techcombo | All rights reserved.</p>
    </div>
</footer>




   );


}

export default Footer;