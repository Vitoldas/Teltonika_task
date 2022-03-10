import React from 'react';
import PaperPlane from '../../../assets/paper_plane.svg';
import LinkedIn from '../../../assets/linkedin.png';
import Facebook from '../../../assets/facebook.png';
import Twitter from '../../../assets/twitter.png';
import Instagram from '../../../assets/instagram.png';
import Youtube from '../../../assets/youtube.png';
import './footer.scss';

const Footer = () => {
  // teltonika
  const teltonika = [
    'Teltonika',
    'Teltonika Telematics',
    'Teltonika Networks',
    'Teltonika Mobility',
    'Teltonika Telemedic',
    'Teltonika EMS',
    'Teltonika Energy',
    'Teltonika High-Tech Hill',
  ];

  // news
  const news = ['News', 'Newsroom', 'Newsletter'];

  // About Us
  const aboutUs = [
    'About Us',
    'Mission, Vision & Values',
    'Leadership',
    'Policies & Certificates',
    'Contacts',
    'Connect',
    'Copyright © TELTONIKA[S], 2022',
  ];

  return (
    <footer className="footer--container">
      <div className="footer--wrapper">
        <ul>
          <h3>{teltonika[0]}</h3>
          <li>{teltonika[1]}</li>
          <li>{teltonika[2]}</li>
          <li> {teltonika[3]}</li>
          <li>{teltonika[4]}</li>
          <li>{teltonika[5]}</li>
          <li>{teltonika[6]}</li>
          <li>{teltonika[7]}</li>
        </ul>
        <ul>
          <h3>{news[0]}</h3>
          <li>{news[1]}</li>
          <li>{news[2]}</li>
        </ul>
        <ul className="about-us">
          <h3>{aboutUs[0]}</h3>
          <li>{aboutUs[1]}</li>
          <li>{aboutUs[2]}</li>
          <li>{aboutUs[3]}</li>
          <li>{aboutUs[4]}</li>
          <li>{aboutUs[5]}</li>
        </ul>
        <div className="contact--wrap">
          <div className="newsletter">
            <h3>{news[2]}</h3>
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
            <h3>{aboutUs[4]}</h3>
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
            <p className="copyright--styling">{aboutUs[6]}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
