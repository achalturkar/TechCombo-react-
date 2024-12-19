
import "./index.css"



const ContactForm = () =>{


    return(


        <section className="bg-c ">
            <div className="container contact sec-margin">
                <div className=" align-item-center" data-aos="fade-up">
                    <h2 className="section-head">Our Contact</h2>
                    <p className="section-para"></p>
                </div>

                <div className="contact-info">
                    <div className="box" data-aos="fade-up">
                        <div className=" circle-container cont-box down-contact-detail">
                            <div className="cont-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="cont-dif">
                                <div className="contact-ways">
                                    Phone
                                </div>
                                <div className="cont-info-1">
                                    +91 9999999999
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="circle-container cont-box up-contact-detail">
                            <div className="cont-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="cont-dif">

                                <div className="contact-ways">
                                    Email
                                </div>
                                <div className="cont-info-1">
                                    <a to="mailto:hr@techcombo.in" target="_blank"
                                        className="mail-link">hr@techcombo.in</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="box" data-aos="fade-up" >
                        <div className="circle-container cont-box down-contact-detail" >
                            <div className="cont-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="cont-dif">

                                <div className="contact-ways">
                                    Address
                                </div>
                                <div className="cont-info-1">
                                    Dronacharya Nagar, Nagpur
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <div className="circle-container cont-box up-contact-detail">
                            <div className="cont-icon">
                                <i className="fa-solid fa-globe"></i>
                            </div>
                            <div className="cont-dif">

                                <div className="contact-ways">
                                    Follow us
                                </div>
                                <div className="social-icon">
                                    <a to="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a to="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                    <a to="https://www.linkedin.com/groups/10462070/?highlightedUpdateUrn=urn%3Ali%3AgroupPost%3A10462070-7247050478386089984&q=highlightedFeedForGroups"
                                        target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                    <a to="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="form-box mb-5 form-clr" data-aos="fade-up">
                    <form className=" container ">
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationDefault01">First Name</label>
                                <input type="text" className="form-control" id="validationDefault01" value="" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationDefault02">Last Name</label>
                                <input type="text" className="form-control" id="validationDefault02" value="" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationDefault02">Email</label>
                                <input type="email" className="form-control" id="validationDefault02" value="" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationDefault02">Mobile Number</label>
                                <input type="text" className="form-control" id="validationDefault02" value="" required/>
                            </div>
                            <div className="col-12 mb-4 ">
                                <label for="validationDefault02">Add Message</label>
                                <textarea className="form-control" id="validationDefault02" value="" required> </textarea>
                            </div>
                            <div className=" buton">
                                <button className=" form-control btn btn-primary" type="submit">Send Message</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </section>


    )
    
}

export default ContactForm;