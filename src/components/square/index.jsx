
import {Link} from "react-router-dom";
import "./index.css"
const Square = ({head, para, icon:Icon, link}) => {

   

    return(
    <div className="col mb-4" data-aos="fade-up">
        <div className="card h-100 service-card">
            <div className="service-logo-outer">

                <div className="service-logo">
                 <i className={Icon}></i>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title align-item-center">{head}
                </h5>
                <p className="card-text">{para}</p>
                { link && (<Link className="button-read" to={link}>Read More</Link>)}
            </div>
        </div>
    </div>

    );
}

export default Square;