import React from 'react';
import PaperPlane from '../../assets/paper_plane.svg';
import LinkedIn from '../../assets/linkedin.png';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtube.png';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer--container">
      <div className="footer--wrapper">
        <ul>
          <h3>Teltonika IoT Group</h3>
          <li>Teltonika Telematics</li>
          <li> Teltonika Networks</li>
          <li> Teltonika Mobility</li>
          <li> Teltonika Telemedic</li>
          <li> Teltonika EMS</li>
          <li> Teltonika Energy</li>
          <li> Teltonika Hig-Tech Hill</li>
        </ul>
        <ul>
          <h3>News</h3>
          <li>Newsroom</li>
          <li>Newsletter</li>
        </ul>
        <ul className="about-us">
          <h3>About us</h3>
          <li>Welcome to Teltonika</li>
          <li>Mission, Vision & Values</li>
          <li>Leadership</li>
          <li>Policies & Certificates</li>
          <li>Contacts</li>
        </ul>
        <div className="contact--wrap">
          <div className="newsletter">
            <h3>NewsLetter</h3>
            <input
              type="text"
              placeholder="Email Address"
              className="email-footer"
            />
            <a href="https://teltonika-iot-group.com/subscribe" alt="Teltonika">
              <img src={PaperPlane} className="plane--icon" alt="send button" />
            </a>
          </div>
          <div className="connect">
            <h3>Connect</h3>
            <div className="social">
              <div className="linked-in">
                <a
                  href="https://www.linkedin.com/company/teltonika/"
                  alt="LinkedIn"
                >
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>
              </div>
              <div className="youtube">
                <a
                  href="https://www.youtube.com/channel/UCTt_LNyu32CC7jLCiAYVwrw"
                  alt="Youtube"
                >
                  <img src={Youtube} alt="Youtube" />
                </a>
              </div>
              <div className="facebook">
                <a
                  href="https://www.facebook.com/TELTONIKAinternational/"
                  alt="Facebook"
                >
                  <img src={Facebook} alt="Facebook" />
                </a>
              </div>
              <div className="twitter">
                <a href="https://twitter.com/teltonika" alt="Twitter">
                  <img src={Twitter} alt="Twitter" />
                </a>
              </div>
              <div className="instagram">
                <a
                  href="https://www.instagram.com/teltonika_official/"
                  alt="Instagram"
                >
                  <img src={Instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="copyrights">
            <p className="copyright--styling">Copyright © TELTONIKA[S], 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
