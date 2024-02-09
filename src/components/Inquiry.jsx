import React from "react";

const Inquiry = () => {
     return (
          <>
               <div class="inquiry-section">
                    <div>
                         <input type="text" id="fName" placeholder="First Name" required/>
                         <input type="text" id="lName" placeholder="Last Name"/>
                    </div>
                    <div>
                         <input type="email" id="email" placeholder="Email Address" required/>
                         <input type="number" id="tel" placeholder="Telephone Number" required/>
                    </div>
                    <textarea placeholder="Tell us about your needs and special circumstances" id="detail-descr"></textarea>
                    <div className="inquiry-subcontainer">
                         <p className="inquiry-policy-txt" >By clicking Tell Me More below you agree to Sun West Mortgage Company, INC's NMLS 3277 ("Sun West)
                         <a className="inquiry-hyperLink" href="#!">&nbsp;Terms and Conditions&nbsp; </a>and
                         <a className="inquiry-hyperLink" href="#!">&nbsp;Security and Privacy policy&nbsp;</a>;
                         and you agree to Celligence International, LLC's ("Celligence")
                         <a className="inquiry-hyperLink" href="#!">&nbsp;Terms and Conditions&nbsp; </a>and
                         <a className="inquiry-hyperLink" href="#!">&nbsp;Security and Privacy policy&nbsp;</a>,
                         all of which you may access by clicking on the
                         "Terms and Conditions" or "Security Policy" web links contained herein.
                         </p>
                    </div>
                    <button id="tell-more-btn">Tell Me More</button>
               </div>
          </>
  )
};

export default Inquiry;
