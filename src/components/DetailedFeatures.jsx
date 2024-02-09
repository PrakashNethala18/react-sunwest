import React from "react";
import angelAiLogo from './../assets/images/angelailogo.png';
import trueApproval from './../assets/images/TRUApproval.png';
import houseMoney from './../assets/images/housemoney.png';
import expansiveProductline from './../assets/images/Expansiveproductline.png';
import allTimeProcessing from './../assets/images/245Processing.png';
import manualUnderwriting from './../assets/images/ManualUnderwriting.png';

const DetailedFeatures = () => {
     return (
          <>
          <div className="detailedFeaturesSection">
               <div className="chatbot-feat">
               <div>
                    <img src={angelAiLogo} alt="angel-ai-logo" height="50" width="50"/>
                </div>
               <div>
                    <h4 className="feature-titles">Angel Ai</h4>
                    <div className="featute-txt">24/7 Support from <a className="detailedSectionHyperlink" href="#!">Angel Ai</a>, Sun West's proprietary Artificial Intelligence. Your
                         personal loan expert on anything and EVERYTHING you could need!
                    </div>
               </div>
          </div>

          <div className="tru-approval">
               <div>
                    <img src={trueApproval} alt="TRU Approval" height="50" width="50"/>
               </div>
               <div>
                    <h4 className="feature-titles">TRU Approval @</h4>
                    <div className="featute-txt">With mimimum conditionally guaranteed <a className="detailedSectionHyperlink" href="#!">TRU Approvals</a> your clients can make offers with
                         no loan contigency
                    </div>
               </div>
          </div>

          <div className="house-money">
               <img src={houseMoney} alt="houseMoney" height="50" width="50"/>
               <h4 className="feature-titles">Government loans with minimum FICO of 500 </h4>
          </div>

          <div className="expansive-productline">
               <img src={expansiveProductline} alt="Expansive-productline" height="50" width="50"/>
               <h4 className="feature-titles">Expansive Product Line</h4>
          </div>

          <div className="alltime-processing">
               <img src={allTimeProcessing} alt="245Processing" height="50" width="50"/>
               <h4 className="feature-titles">24/5 Processing and Underwriting</h4>
          </div>

          <div className="manual-underwritting">
               <img src={manualUnderwriting} alt="ManualUnderwriting" height="50" width="50"/>
               <h4 className="feature-titles">Manual Underwriting allowed on FHA, VA, and USDA loans</h4>
          </div>
          </div>
          <div className="detailFeatureFooterNote"> Visit <a className="detailedSectionHyperlink" href="#!">swmc.com/tru-terms</a> for TRU Approval @ terms and conditions.</div>
          </>
  )
};

export default DetailedFeatures;
