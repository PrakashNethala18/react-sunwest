import React from "react";
import top50 from './../assets/images/Top-50-Logo-blue.png';
import bbbwhite from './../assets/images/bbb-white.png';
import bcawidgets from './../assets/images/Bcawidgets.png';
import equalHousing from './../assets/images/equal-housing.png';
import customerReview from './../assets/images/customer-review.png';
import twitter from './../assets/images/twitter.png';
import linkedin from './../assets/images/linkedin.png';
import facebook from './../assets/images/download.png';

const Footer = () => {
     return (
          <footer>
               <div className="privacy-notes">
                    <div>&nbsp;Privacy Policy&nbsp;|</div>
                    <div>&nbsp;Terms and Conditions&nbsp;|</div>
                    <div>&nbsp;Licences&nbsp;|</div>
               </div>   
               <hr />
               <div className="footer-socials">
                    <img className="sunwest-social" src={facebook} alt="sunwest-facebook" height="20" width="20"/>
                    <img className="sunwest-social" src={twitter} alt="sunwest-twitter" height="20" width="20"/>
                    <img className="sunwest-social" src={linkedin} alt="sunwest-linkedin" height="20" width="20"/>
               </div>
               <div className="footer-licence-section">
                    <p class="footer-text">@ 2024 Sun West Mortgage Company, Inc. All Rights Reserved</p>
                    <p class="footer-text">For licencing information, go to: <a className="footerHyperLink" href="#!">nmlsconsumeraccess.org.&nbsp;</a> Visit <a className="footerHyperLink" href="#!">https://www.swmc.com/disclaimer&nbsp;</a> for the full list of licence information.</p>
                    <p class="footer-text">Please <a className="footerHyperLink" href="!#">Click Here&nbsp;</a>to view Texas Complaint Notion and Servicing Disclosure</p>
               </div>
               <div className="footer-icons">
                    <div className="footer-one">
                         <img src={top50} alt="award-top-50" height={100} width={100}/>
                    </div>
                    <div className="footer-two">
                         <img src={bbbwhite} alt="bbb-white" height={60} width={60}/>
                         <img src={bcawidgets} alt="Bcawidgets" height={60} width={60}/>
                    </div>
                    <div className="footer-three">
                         <img src={equalHousing} alt="equal-housing" height={60} width={60}/>
                         <img src={customerReview} alt="customer-review" height={60} width={60}/>
                    </div>
               </div>
          </footer>
  )
};

export default Footer;
