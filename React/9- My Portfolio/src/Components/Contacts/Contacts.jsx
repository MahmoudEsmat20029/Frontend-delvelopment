import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Contacts() {
  return (
    <section className="contacts" id="contact">
      <header>
        <h1>
          My <span>Contacts</span>
        </h1>

        <p className="overview">
          Have a project in mind? Let's discuss how we can work together
        </p>
      </header>

      <div className="row">
        <div className="col-12 col-md-6 mb-3 mb-sm-0 form-container p-0">
          <div className="form mx-3 mx-md-5">
            <h1 className="mx-0 mb-4">Send a Message</h1>

            <div className="row gap-0">
              <div className="col-12 col-md-6 p-2">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="col-12 input"
                />
              </div>
              <div className="col-12 col-md-6 p-2">
                <label>Your Email</label>
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="col-12 input"
                />
              </div>
              <div className="col-12 p-2">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Project discussion"
                  className="col-12 input"
                />
              </div>

              <div className="col-12 p-2">
                <label>Message</label>
                <textarea
                  type="text"
                  placeholder="Tell me about project..."
                  className="col-12 input"
                  style={{ height: "100px" }}
                />
              </div>

              <button>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ marginRight: "10px", fontSize: "15px" }}
                />
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mb-3 mb-sm-0 px-0">
          <h1>Contact Information</h1>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <div className="icon-details">
              <p>Email</p>
              <h5>mahmoudesmat20029@gmail.com</h5>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon className="icon" icon={faPhone} />
            <div className="icon-details">
              <p>Phone</p>
              <h5>+20 1012069129 / +20 1212960694</h5>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <div className="icon-details">
              <p>Location</p>
              <h5>Zagazig, sharqia - Egypt</h5>
            </div>
          </div>

          <div className="card">
            <FontAwesomeIcon className="icon" icon={faClock} />
            <div className="icon-details">
              <p>Responsive Time</p>
              <h5>Within 24 hours</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
