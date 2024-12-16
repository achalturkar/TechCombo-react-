
import "./index.css"
import Header from "../header";
import Footer from "../footer/footer.jsx";
import Map from "../map"
import {Link} from "react-router-dom";




const Contact = () => {

  return (

    <>

      <Header />

      <main className="main-element">

        <section className="contact-head-info">
          <div className="contact-head" data-aos="fade-up">
            <h1>Get In Touch</h1>
          </div>
        </section>

        <section className="contact-box container ">
          <div className="left-contact" data-aos="fade-right">
            <div className="left-contact-detail">
              <div className="contact-cont-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-ways">
                Phone
              </div>
              <div class="cont-info-1">
                +91 9999999999
              </div>
            </div>
            <div className="left-contact-detail">
              <div className="contact-cont-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-ways">
                Email
              </div>
              <div className="cont-info-1">
                <Link to="mailto:hr@techcombo.in" target="_blank" class="mail-link">hr@techcombo.in</Link>
              </div>
            </div>

            <div className="left-contact-detail">
              <div className="contact-cont-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-ways">
                Address
              </div>
              <div className="cont-info-1">
                Trimurti Nagar,
              </div>
              <div className="cont-info-2">
                Nagpur
              </div>
            </div>

            <div className="left-contact-detail">
              <div className="contact-cont-icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <div className="contact-ways">
                Follow Us
              </div>
              <div className="social-icon">
                <Link to="#" target="_blank"><i class="fab fa-facebook-f"></i></Link>
                <Link to="#" target="_blank"><i class="fab fa-twitter"></i></Link>
                <Link to="https://www.linkedin.com/groups/10462070/?highlightedUpdateUrn=urn%3Ali%3AgroupPost%3A10462070-7247050478386089984&q=highlightedFeedForGroups"
                  target="_blank"><i class="fab fa-linkedin-in"></i></Link>
                <Link to="#" target="_blank"><i class="fab fa-instagram"></i></Link>
              </div>
            </div>

          </div>


          <div className="right-contact">

            <div className="form-heading" data-aos="fade-right">
              <h1>Send us a message</h1>
            </div>

            <div className="contact-form" data-aos="fade-left">
              <form action="/send-message" method="POST">
                <div className="input-box">
                  <input type="text" name="Name" placeholder="Name" required />
                </div>
                <div className="input-box">
                  <input type="text" name="MobileNumber" placeholder="Mobile Number" required />
                </div>
                <div className="input-box">
                  <input type="email" name="Email" placeholder="Email" required />
                </div>
                <div className="input-box">
                  <span data-name="hear">
                    <select name="hear" id="hear" placeholder="How did you hear about us?">
                      <option value="How did you hear about us?">How did you hear about us?</option>
                      <option value="linkedin/other Social media">linkedin/other Social media</option>
                      <option value="Google">Google</option>
                      <option value="Friends & Family">Friends & Family</option>
                      <option value="Website">Website</option>
                    </select>
                  </span>
                </div>
                <div className="input-box">
                  <textarea name="message" placeholder="Leave Message here"></textarea>
                </div>

                <div className="button">
                  <button type="submit">Send Message</button>
                </div>


              </form>
            </div>

          </div>
        </section>

      </main>

      <Map />
      <Footer />


    </>

  );


}



export default Contact;