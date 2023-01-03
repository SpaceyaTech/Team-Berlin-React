import React from 'react';
import icon from '../../assets/icons/logo.svg';
import './styles/footerStyles.css';
//icons from reactIcons
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
//lists array
import { companyList } from '../assets/companyList';
import { resourcesList } from '../assets/resourcesList';
import { quickLinkList } from '../assets/quickLinksList';
//link compnent
import { Link } from './Link';

export const Footer = () => {
  return (
    <section className="footer">
      {/* far-left div */}
      <div className="divLeft">
        <img src={icon} alt="space ya tech logo" />

        <div className="divIcons">
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <AiOutlineInstagram />
          </div>
          <div className="icon">
            <AiOutlineTwitter />
          </div>
          <div className="icon">
            <RiLinkedinFill />
          </div>
        </div>
      </div>

      {/* company links div */}
      <div className="company">
        <h4>Company</h4>

        <div className="links">
          <ul>
            {companyList.map((link) => {
              return (
                <li>
                  <Link {...link} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="resources">
        <h4>Resources</h4>

        <div className="links">
          <ul>
            {resourcesList.map((link) => {
              return (
                <li>
                  <Link {...link} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="quickLinks">
        <h4>Qucik Links</h4>

        <div className="links">
          <ul>
            {quickLinkList.map((link) => {
              return (
                <li>
                  <Link {...link} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="newsletter">
        <h4>NewsLetter</h4>
        <p>
          Subscribe to our newsletter to get your weekly dose of news, updates, tips and even
          special offers
        </p>
        <input placeholder="Write your email here" />
        <button>Submit</button>
      </div>

      <div className="copywrite">
        <p> &copy; {new Date().getFullYear()} SpaceyaTech | All Rights Reserved </p>
      </div>
    </section>
  );
};
