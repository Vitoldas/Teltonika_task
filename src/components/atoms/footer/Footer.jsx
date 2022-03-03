import React from 'react';
import PaperPlane from '../../../assets/paper_plane.svg';
import LinkedIn from '../../../assets/linkedin.png';
import Facebook from '../../../assets/facebook.png';
import Twitter from '../../../assets/twitter.png';
import Instagram from '../../../assets/instagram.png';
import Youtube from '../../../assets/youtube.png';
import './footer.scss';

const Footer = () => {
  const teltonikaIot = 'Teltonika';
  const teltonikaTelematics = 'Teltonika Telematics';
  const teltonikaNetworks = 'Teltonika Networks';
  const teltonikaMobility = 'Teltonika Mobility';
  const teltonikaTelemedic = 'Teltonika Telemedic';
  const teltonikaEms = 'Teltonika EMS';
  const teltonikaEnergy = 'Teltonika Energy';
  const teltonikaTech = 'Teltonika High-Tech Hill';
  const news = 'News';
  const newsroom = 'Newsroom';
  const newsLetter = 'Newsletter';
  const aboutUs = 'About Us';
  const welcomeTeltonika = 'Welcome to Teltonika';
  const values = 'Mission, Vision & Values';
  const leadership = 'Leadership';
  const policies = 'Policies & Certificates';
  const contacts = 'Contacts';
  const connect = 'Connect';
  const copyrights = 'Copyright © TELTONIKA[S], 2022';

  return (
    <footer className="footer--container">
      <div className="footer--wrapper">
        <ul>
          <h3>{teltonikaIot}</h3>
          <li>{teltonikaTelematics}</li>
          <li>{teltonikaNetworks}</li>
          <li> {teltonikaMobility}</li>
          <li>{teltonikaTelemedic}</li>
          <li>{teltonikaEms}</li>
          <li>{teltonikaEnergy}</li>
          <li>{teltonikaTech}</li>
        </ul>
        <ul>
          <h3>{news}</h3>
          <li>{newsroom}</li>
          <li>{newsLetter}</li>
        </ul>
        <ul className="about-us">
          <h3>{aboutUs}</h3>
          <li>{welcomeTeltonika}</li>
          <li>{values}</li>
          <li>{leadership}</li>
          <li>{policies}</li>
          <li>{contacts}</li>
        </ul>
        <div className="contact--wrap">
          <div className="newsletter">
            <h3>{newsLetter}</h3>
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
            <h3>{connect}</h3>
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
            <p className="copyright--styling">{copyrights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
