import "../assets/css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_contents">

      <div className="col">
        <div className="logo_footer"></div>

        {/* <h4>Cultivate Financial Growth</h4> */}
        <div className="contain contain1">
          <p className="para1">

        Our platform is dedicated to empowering the agricultural community by providing 
        flexible and accessible agri loans tailored to meet the unique needs of every farmer. 
        With a deep understanding of the challenges and opportunities in agriculture, we offer financial solutions that support growth, innovation, and sustainability in farming practices.
          </p>
        </div>
        <div className="follow">
          <h3>Follow Us</h3>
          <div className="icon">
            <FontAwesomeIcon className="single_ic" icon={faFacebookF} />
            <FontAwesomeIcon className="single_ic" icon={faInstagram} />
            <FontAwesomeIcon className="single_ic" icon={faYoutube} />
          </div>
        </div>
      </div>
      
      <div className="col">
        <div className="space"></div>
        <h4>Comapany</h4>
        <div className="contain">
          <p className="para">
            Home
          </p>
          <p className="para">
            Abouts Us
          </p>
          <p className="para">
            Services
          </p>
          <p className="para">
            Personal Loans
          </p>
        </div>
        {/* <div className="follow">
          <h3>Follow Us</h3>
          <div className="icon">
            <FontAwesomeIcon className="single_ic" icon={faFacebookF} />
            <FontAwesomeIcon className="single_ic" icon={faInstagram} />
            <FontAwesomeIcon className="single_ic" icon={faYoutube} />
          </div>
        </div> */}
      </div>
      <div className="col">
        <div className="space"></div>
        <h4>Quick Links</h4>
        <div className="contain">
          <p className="para">
            Terms & conditions
          </p>
          <p className="para">
            Privacy Policy
          </p>
        </div>
        {/* <div className="follow">
          <h3>Follow Us</h3>
          <div className="icon">
            <FontAwesomeIcon className="single_ic" icon={faFacebookF} />
            <FontAwesomeIcon className="single_ic" icon={faInstagram} />
            <FontAwesomeIcon className="single_ic" icon={faYoutube} />
          </div>
        </div> */}
      </div>
      <div className="col">
        <div className="space"></div>
        <h4>Help</h4>
        <div className="contain">
          <p className="para">
            Contact Us
          </p>
          
          <p className="para">
            FAQ
          </p>
          <p className="para">
            Reviews
          </p>
          <p className="para">
            Terms & conditions
          </p>
          <p className="para">
            Privacy Policy
          </p>
        </div>
        {/* <div className="follow">
          <h3>Follow Us</h3>
          <div className="icon">
            <FontAwesomeIcon className="single_ic" icon={faFacebookF} />
            <FontAwesomeIcon className="single_ic" icon={faInstagram} />
            <FontAwesomeIcon className="single_ic" icon={faYoutube} />
          </div>
        </div> */}
      </div>
      
      <div className="col  col4">
        <div className="space"></div>

        <h4>Contact</h4>
        <div className="contain">
          <p className="para">
            <strong>Address : </strong>25, Sri Prasanna Avenue, Anaikkadu,
            Tirupur
          </p>
          <p className="para">
            <strong>Phone : </strong>+91 9994686759
          </p>
          <p className="para">
            <strong>Hours : </strong>10:00 - 18:00 Mon-Sat
          </p>
        </div>
        <div className="follow">
          <h3>Follow Us</h3>
          <div className="icon">
            <FontAwesomeIcon className="single_ic" icon={faFacebookF} />
            <FontAwesomeIcon className="single_ic" icon={faInstagram} />
            <FontAwesomeIcon className="single_ic" icon={faYoutube} />
          </div>
        </div>
      </div>
      </div>
      <div className="copyrights">
        <p className="first_line">© Copyright 2024. All rights reserved</p>
        <p className="last_line">
        Developed, Designed & Maintained by Subiksha (Student of Sri Krishna College of Engineering and Technology)
        </p></div>
    </div>
  );
};

export default Footer;
