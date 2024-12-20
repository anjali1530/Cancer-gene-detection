import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleBlogLeftSide2 = ({image}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="latest-news-box mb-30">
               <div className="latest-news-thumb mb-35">
                  <img src={`img/blog/blog-thumb-${image}.jpg`} alt=""/>
               </div>
               <div className="latest-news-content">
               
                  <h3><a href="https://www.msn.com/en-us/health/other/artificial-intelligence-model-to-help-scientists-predict-whether-breast-cancer-will-spread/ar-AA1bO5nR">AI model to help scientists predict whether breast cancer will spread.</a></h3>
                  <p>Oncologists in the U.K. have developed an AI model to help predict whether aggressive forms of breast cancer will ....</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleBlogLeftSide2;